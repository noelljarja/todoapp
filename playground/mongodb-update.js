// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://noel:noelnoel1@ds121371.mlab.com:21371/ntodoapp', function(err,client){
    if(err){
        return console.log('Unable to connect to MongoDB ' + err);
    }
    console.log('Success');
    const db = client.db('ntodoapp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b34966ff44d48249cbb3d1e')
    },{
        $set : {
            name:'Nono'
        },
        $inc : {
            age: 1
        }
    },{
        returnOriginal:false
    })
        .then(function(result){
        console.log(result);
    })

    })