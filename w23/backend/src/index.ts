import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port:8080 });

let senderSocket: null | WebSocket = null;
let recieverSocket: null | WebSocket = null;

wss.on('connection', function onnection(ws){
    ws.on('message', function message(data: any){
        const message = JSON.parse(data);
        if (message.type === "identify-as-sender"){
            senderSocket = ws;
        }
        else if (message.type === "identify-as-receiver"){
            recieverSocket = ws
        }
        else if (message.type === "create-offer"){
            recieverSocket?.send(JSON.stringify({type:"offer", offer:message.offer}))
        }
        else if (message.type === "create-answer"){
            senderSocket?.send(JSON.stringify({type: "offer", offer: message.offer}))
        } 
        // The ?. checks if recieverSocket exists before calling .send().
// If recieverSocket is null or undefined, it won’t try to call .send(), preventing a runtime error.

// This is safer than writing recieverSocket.send(...) directly, which would crash if recieverSocket is not set.

        // create offer msg
        // create offer msg
        // create offer msg
        
        console.log(message);
    })
});