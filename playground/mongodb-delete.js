// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser:true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //Multiple deletes
    // db.collection('Todos').deleteMany({text: 'Dance'}).then((result) => {
    //     console.log(result);
    // });

    //Delete one
    // db.collection('Todos').deleteOne({text: 'Dance'}).then((result) => {
    //     console.log(result);
    // });

    //Find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // });

    // db.collection('Users').deleteMany({name: 'Jack'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b3bb012b4bf10ec90fd0674")}).then((result) => {
        console.log(result);
    });
});
