import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port:8080 });

wss.on('connection', function onnection(ws){
    ws.on('message', function message(data: any){
        const message = JSON.parse(data);
        // create offer msg
        // create offer msg
        // create offer msg
        
        console.log(message);
    })
});