var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose}=require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',function(req,res){
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then(function(doc){
        res.send(doc);
    },function(e){
        console.log('Error happened');
        res.status(400).send(e);
    })
});
app.get('/todos', function(req,res){
    Todo.find().then(function(todos){
        res.send({todos});
    },function(e){
        res.status(400).send(e);
    })
})
app.get('/todos/:id',function(req,res){
    var id = req.params.id;
    Todo.findById(id).then(function(todos){
        if(todos===null){
            return res.status(404).send();
        }
        res.send({todos});
    },function(e){
        res.status(404).send('');
    })
});
app.delete('/todos/:id',function(req,res){
    var id = req.params.id;
    Todo.findByIdAndRemove(id).then(function(todos){
        if(!ObjectID.isValid(id)){
            return res.status(400).send();
        }
        if(todos===null){
            return res.status(404).send();
        }
        res.send({todos});
    },function(e){
        res.status(404).send(e);
    })
});
app.listen(port, ()=>{
    console.log('Started on port ' + port);
});
module.exports = {app};