#notes related to w24

rpc(remote procedure call) - 
What it is: A way for one program to call a function that actually runs on another computer/server, as if it were a local function.

Goal: Hide the complexity of network communication from the programmer.
types ; grpc, trpc(similar types of frontend and backend),

 json rpc(now worries about data, talk via json yet u can do repc on oter side)

gRPC = Google’s high-performance, language-agnostic RPC framework that uses Protocol Buffers (.proto files) and HTTP/2.

tRPC = TypeScript-only RPC library that infers API types directly from server code, no .proto files, no codegen.


protobuffs(data compression library) - A language-neutral, platform-neutral way of serializing structured data.
(Format for u to store data in an extremely compressed manner)
Created by Google, mainly used with gRPC, but can be used alone.
It is a more efficient alternative to JSON or XML.

1) field numbers 
2) micros services - what all functions the service supports
similar to open api spec file 