// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://noel:noelnoel1@ds121371.mlab.com:21371/ntodoapp', function(err,client){
    if(err){
        return console.log('Unable to connect to MongoDB ' + err);
    }
    console.log('Success');
    const db = client.db('ntodoapp');
    // db.collection('Todos').find({_id : new ObjectID('5b3491f7f97a4049a4213418')}).toArray().then(function(docs){
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },function(err){
    //     console.log('Unable to fetch todos')
    // })
    db.collection('Users').find({name:'Noel'}).toArray().then(function(data){
        console.log(data);
    },function(err){
        console.log('Unable to fetch users')
    })
    //client.close();
})