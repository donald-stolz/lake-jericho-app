var Datastore = require('nedb');
export const clients = new Datastore({ filename: 'clients', autoload: true });
