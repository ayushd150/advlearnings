// simulate updating the state

import { GameManager } from "./store"
import { startLogger } from "./logger"


const gameManager = new GameManager();
startLogger();
setInterval(()=>{
    gameManager.addGame(Math.random().toString())
}, 5000)