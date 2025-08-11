// quic and webrtc are 2 ways for client - client/server persistent communication

import WebSocket, { WebSocketServer } from 'ws'
import http from 'http';

const server = http.createServer(function(request: any, response: any){
    response.end("hi there")
});
const wss = new WebSocketServer({ server })

let userCount = 0 
wss.on('connection', function connection(ws){
    ws.on('error', console.error);
    ws.on('message', function message(data, isBinary){
        wss.clients.forEach(function each(client){
            if (client.readyState === WebSocket.OPEN){
                client.send(data, { binary: isBinary });
        }
    })
})
console.log('user connected', ++userCount)
ws.send('hello! message from server');
});
server.listen(8080, function(){
    console.log((new Date()) + 'server is listening to port 8080')
});