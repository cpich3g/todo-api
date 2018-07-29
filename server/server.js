var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo')
// });

// var inTodo = new Todo({
//     text: '  Edit this  '
// });

// inTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });

var newUser = new User({
    user: 'Justin',
    email: '  justin@njs.com  '
});

newUser.save().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (e) => {
    console.log(e);
});