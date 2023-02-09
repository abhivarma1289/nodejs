
const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');

const url='mongodb://localhost:27017/';
const dbname='conFusion';
 MongoClient.connect(url,(err,client)=>{
    console.log(err);
     assert.equal(err,null);
     console.log("conected to server successfully");

     const db=client.db(dbname);
     const collection =db.collection('dishes');
     
     collection.insertOne({"name": "biryani","discription":"very tasty"},(err,result)=>{
        assert.equal(err,null);
        console.log("after insert:\n");
        console.log(result.ops);
        collection.find({}).toArray((err,docs)=>{
             assert.equal(err,null);
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection('dishes',(err,rsult)=>{
                 assert.equal(err,null);
                client.close();
            });
         });
     });
 });