const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text : 'Firtst test todo'
},{
    _id: new ObjectID(),
    text: 'Second test toto'
}];

beforeEach(function(done){
    Todo.remove({}).then(function(){
     return   Todo.insertMany(todos);
    }).then(function(){
        return done();
    })
});

describe('POST /todos', ()=>{
    it('should create a new todo', function(done){
        var text = 'Test toto text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect(function(res){
                expect(res.body.text).toBe(text);
            }).end((function(err,res){
                if(err){
                return done(err);
                }
                Todo.find({text}).then(function (todos){
                  expect(todos.length).toBe(1);
                  expect(todos[0].text).toBe(text);
                  done();
                }

                ).catch(function(e){
                    return done(e);
                })
            }))
    });
    it('should not create todo with invalid body data', function(done){
        request(app)
            .post('/todos')
            .send({text:""})
            .expect(400)
            .end((function(err,res){
            if(err){
                return done(err);
            }
            Todo.find().then(function (todos){
                    expect(todos.length).toBe(2);
                    done();
                }

            ).catch(function(e){
                return done(e);
            })
        }))
    })
})
describe('GET /todos', function(){
    it('should get all todos',function(done){
        request(app)
            .get('/todos')
                .expect(200)
                .expect(function(res){
                expect(res.body.todos.length).toBe(2)
                })
            .end(done);
    })
})
describe ('GET /todos', function(){
    it('Should return todo doc', function(done){
        request(app)
            .get('/todos/' + todos[0]._id.toHexString())
            .expect(200)
            .expect(function(res){
                expect(res.body.todos.text).toBe(todos[0].text);
            })
            .end(done);
    });
    it('Should return 404 if toto not found', function(done){
        var newId = new ObjectID();
        request(app)
            .get('/todos/'+ newId.toHexString())
            .expect(404)
            .expect(function(res){
                expect(res.body.todos).toBe(undefined)
            })
            .end(done);
    })
    it('Should return 404 if id is invalid', function(done){
        var newId = 444;
        request(app)
            .get('/todos/'+ newId)
            .expect(404)
            .expect(function(res){
                expect(res.body).toEqual({})
            })
            .end(done);
    })

describe('Delete /todos',function(done){
    it('Should remove todo', function(done){
        var hexId = todos[1]._id.toHexString();
        request(app)
            .delete('/todos/' + hexId)
            .expect(200)
            .expect(function(res){
                expect(res.body.todos._id).toBe(hexId);
            })
            .end(function(err,res){
            if(err){
                return done(err);
            }
            Todo.findById(hexId).then(function(todo){
              expect(todo).toBe(null);
               done();
            }).catch((e)=>done(e))

            })
        })
    it('should return 404 if todo not found',function(done){
        var newId = new ObjectID();
        request(app)
            .delete('/todos/'+ newId.toHexString())
            .expect(404)
            .end(done)
    });
    it('should return 404 if object id is invalid', function(done){
        var newId = 444;
        request(app)
            .delete('/todos/'+ newId)
            .expect(404)
            .end(done);
    })
    })
    });
