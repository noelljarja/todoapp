const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user');


 Todo.remove({}).then(function (result){
     console.log(result);
})

Todo.findByIdAndRemove('5b3607969b8ecc204c9a563f').then(function(todo){
    console.log(todo)
});
Todo.findOneAndRemove('5b3607969b8ecc204c9a563f').then(function(todo){
    console.log(todo)
});