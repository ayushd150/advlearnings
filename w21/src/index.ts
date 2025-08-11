// simulate updating the state

import { games } from "./store"
import { startLogger } from "./logger"

setInterval(()=>{
    games.push({
        id:Math.random().toString(),
        whitePlayerName: 'ayush',
        blackPlayerName: 'aram',
        moves:[]
    })
}, 5000)