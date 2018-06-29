// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://noel:noelnoel1@ds121371.mlab.com:21371/ntodoapp', function(err,client){
    if(err){
        return console.log('Unable to connect to MongoDB ' + err);
    }
    console.log('Success');
    const db = client.db('ntodoapp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed:false
    // },function(err,res){
    //     if(err){
    //         return console.log('Unable to insert todo ' + err);
    //     }
    //     console.log('Success : ' + JSON.stringify(res.ops,undefined,2));
    // })
    // db.collection('Users').insertOne({
    //     name: 'Noel',
    //     age: '20',
    //     location: 'SH'
    // },function(err,res){
    //     if(err){
    //         return console.log('Unable to insert user ' + err);
    //     }
    //     console.log('Success:  ' + JSON.stringify(res.ops[0]._id.getTimestamp()));
    //
    // })
    client.close();
})