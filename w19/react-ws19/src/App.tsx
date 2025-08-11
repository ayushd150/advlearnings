import { useEffect, useState } from "react";
import './App.css'

function App(){
  const [socket,setSocket] = useState<WebSocket | null>(null)
  const [latestmessage, setLatestMessage] = useState<string | null>(null)

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log('connected')
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log("recieved messgae", message.data) //data is the property that contains payload sent by the server
      setLatestMessage(message.data)
    }

    return () =>{
      socket.close()
    }


  }, [])



  if (!socket){
    return <div>
      Loading : {latestmessage}
    </div>
  }
  return (
    <>
    </>
  )
}

export default App