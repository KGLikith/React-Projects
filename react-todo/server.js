import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import axios from "axios"

const app=express();
const port = 3000;
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.get('/',(req,res)=>{
    res.render('index.ejs',{recievedtext:"hello"})
})

app.post('/posts',async (req,res)=>{

    console.log(req.body.text)
    let text=req.body.text;
    res.render('home.ejs',{ text:text })
})

app.listen(port,()=>{
    console.log("port running in 3000")
})