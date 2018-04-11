/* eslint global-require: 0, flowtype-errors/show-errors: 0 */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
import { app, BrowserWindow, ipcMain } from 'electron';
import MenuBuilder from './menu';
import {
	FETCH_LIST,
	RETURN_LIST,
	FETCH_CLIENT,
	RETURN_CLIENT,
	UPDATE_CLIENT,
	ADD_CLIENT,
	REMOVE_CLIENT
} from './constants/constants'

let mainWindow = null;

// Connect to Database
var Datastore = require('nedb');
const dataPath = app.getPath('userData') + '/clients.json';
const clients = new Datastore({filename: dataPath, autoload: true});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  require('electron-debug')();
  const path = require('path');
  const p = path.join(__dirname, '..', 'app', 'node_modules');
  require('module').globalPaths.push(p);
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];

  return Promise
    .all(extensions.map(name => installer.default(installer[name], forceDownload)))
    .catch(console.log);
};


/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('ready', async () => {
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    minWidth: 500,
    minHeight: 500,
		// resizable: false,
		webPreferences: {backgroundThrottling: false}
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
});

// Database Communication
// NOTE: Should setup background window for performance enhancements
ipcMain.on(FETCH_LIST, () => {
	console.log("electron fetchList");
	clients.find({}, { "personal.name": 1 }, function (err, docs) {
		console.log("From electron: " + docs);
		mainWindow.webContents.send(RETURN_LIST, docs);
	});
})

ipcMain.on(ADD_CLIENT, (event, client) => {
	clients.insert(client, function (err, doc) {
	  // console.log('Inserted', doc.personal.name, 'with ID', doc._id);
	});
})

ipcMain.on(REMOVE_CLIENT, (event, clientID) => {
	clients.remove({ _id: clientID }, {}, function (err, numRemoved) {
		// console.log("Removed " + numRemoved + " client");
	});
})

ipcMain.on(FETCH_CLIENT, (event, clientID) => {
	clients.findOne({ _id: clientID }, function (err, doc) {
	  // console.log('Found user:', doc);
		mainWindow.webContents.send(RETURN_CLIENT, doc);
	});
})

ipcMain.on(UPDATE_CLIENT, (event, client) => {
	clients.update({_id: client._id}, client, {}, function (err, numReplaced) {
	  // console.log("Updated " + numReplaced + " Client");
	});
})
