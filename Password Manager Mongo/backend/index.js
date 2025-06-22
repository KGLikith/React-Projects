import express from "express"
import dotenv from "dotenv";
import  { MongoClient } from 'mongodb';
dotenv.config();
import cors from "cors"

const client=new MongoClient(process.env.MONGO_URL)
await client.connect()
const db = client.db("passwords");

const app=express();
const port=3000;

app.use(cors())
app.use(express.urlencoded({extended:false}))

app.get('/',async (req,res)=>{
    const collection = db.collection('passwords');
    const findResult=await collection.find({}).toArray()
    res.send(findResult)
})  

app.post('/',async (req,res)=>{
    const form =req.body;
    const collection = db.collection('passwords');
    const findResult=await collection.insertOne(form)
    res.send(findResult)
})  

app.delete('/',async(req,res)=>{
    const id =req.body.id
    console.log(id)
    const collection=db.collection("passwords");
    const result=await collection.deleteOne({id:id})
    res.send(result)
})





app.listen(port,()=>console.log(port,"is running"))