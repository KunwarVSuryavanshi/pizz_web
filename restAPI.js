const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mongoClient = mongodb.MongoClient
const cors = require('cors')
var url = "mongodb://localhost:27017/";
var app = express();
const dbName = "pizzastore"
app.use(bodyParser.json());
app.use(cors())
app.get('/pizzas',(req,res)=>{
    mongoClient.connect(url,(err,client)=>{
        if(err) console.log(err);
        else{
            const db=client.db(dbName);
            db.collection('pizzas').find({}).toArray(function(err,result){
                if(err) console.log(err)
                else{
                    res.send(result);
                }
            })
            client.close();
        }
    })
})
app.get('/ing',(req,res)=>{
    mongoClient.connect(url,(err,client)=>{
        if(err) console.log(err)
        else{
            const db = client.db(dbName)
            db.collection('ingredients').find({}).toArray(function(err,result){
                if(err) console.log(err)
                else{
                    res.send(result);
                }
            })
            client.close();
        }
    })
})

app.listen(3004,()=>console.log("*************Express started************"))