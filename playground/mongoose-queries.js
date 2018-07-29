const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6b5debc00d56af54b6bc51fc';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log('UserByID', user);
}).catch((e) => console.log(e));

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if (!todos) {
//         return console.log('ID not found');
//     } 
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     completed: false
// }).then((todos) => {
//     console.log('Todo1', todos);
// });

// Todo.findById(id).then((todos) => {
//     if (!todos) {
//         return console.log('ID not found');
//     } 
//     console.log('TodoByID', todos);
// }).catch((e) => console.log(e));