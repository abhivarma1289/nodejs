const { MongoClient } = require('mongodb');
console.log('connecting to mongo....');
console.log(MongoClient);
MongoClient.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log('connected');
    })
    .catch((e) => {
        console.log(e);
        console.log(e.reason.servers);
        console.error(JSON.stringify(e));
    });