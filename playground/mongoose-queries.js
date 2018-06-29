const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user');
var id = '5b35e5ca4c8352593cc11cb9';
var idu = '5b34b5845c8c21485cd71a07';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }
// Todo.find({
//     _id: id
// }).then(function(todos){
//     console.log('Todos ', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then(function(todo){
//     if(!todo){
//         return console.log('Id not correct');
//     }
//     console.log('Todos ', todo);
// });
//
// Todo.findById(id).then(function(todo){
//     if(!todo){
//         return console.log('Id not correct');
//     }
//     console.log('Todo by id ', todo);
// }).catch(function(e){
//     return console.log(e);
// })
 User.find({
     _id:idu
}).then(function(users){
     console.log('Users ', users);
 });
 User.findOne({
     _id:idu
 }).then(function(user){
     console.log('User', user);
 })
User.findById(idu).then(function(user){
    if(!user){
        return console.log('No user found')
    }
    console.log('User',user);
})