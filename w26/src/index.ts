import express from "express";
const app=express()

import client from "prom-client";

app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.get("/user", async(req, res)=>{
    let user = {
        name: 'ayush',
        age: 20
    }
    res.json({
        name: 'ayush'
    })
})

app.post("/user", (req,res)=>{
    res.json({
        name: 'ayush'
    })
})

app.listen(3000)