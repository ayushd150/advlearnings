import express from "express";
import { createClient } from "redis";
const app= express()
app.use(express.json())
const client = createClient();
client.connect()


app.post("/submit", (req, res) =>{
    const {problemId, userId, code, language} = req.body;
    try{
        client.lpush("submissions", JSON.stringify({problemId, userId, code, language}))
        res.json({
            message: "submission recieved"
        })
    }catch(e){
        res.json({
            message: "submisiion failed"
        })
    }
})