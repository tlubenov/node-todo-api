// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('You are connected');
    //
    db.collection('Users').findOneAndUpdate({name: 'Todor'},
        {
            $set: {
                height: 175,
                weight: 95
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
        console.log(result);
    });
    db.close();
});
