// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('You are connected');
    // db.collection('Todos').insertOne({
    //     text: 'Soething to do',
    //     completed: false
    // }, (err, res) => {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(res.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Todor',
    //     age: 40,
    //     location: 'Sofia'
    // }, (err, res) => {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(res.ops));
    // });

    db.close();
});

