var Datastore = require('nedb');
const {remote} = require('electron');
const dataPath = remote.app.getPath('userData') + '/clients.json'
// const dataPath = path.join(remote.app.getPath('userData'), 'clients.json')
// NOTE: Not working
console.log(dataPath);
export const clients = new Datastore({
	filename: dataPath,
	autoload: true });
