// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://noel:noelnoel1@ds121371.mlab.com:21371/ntodoapp', function(err,client){
    if(err){
        return console.log('Unable to connect to MongoDB ' + err);
    }
    console.log('Success');
    const db = client.db('ntodoapp');
    //deöete many
   // db.collection('Todos').deleteMany({text:'Eat lunch'}).then(function(result){
   //     console.log(result);
   // });
   //delete one
   //  db.collection('Todos').deleteOne({text:'Eat lunch'}).then(function(result) {
   //      console.log(result);
   //  });
   //  //find one and delete
   //  db.collection('Todos').findOneAndDelete({completed:false}).then(function(result){
   //      console.log(result);
   //  })
    db.collection('Users').deleteOne({name:'Noel'}).then(function(result){
        console.log(result);
    });
    db.collection('Users').findOneAndDelete({_id:ObjectID('5b3494c874176b4a8053e9a0')}).then(function(result){
        console.log(result);
    })
})