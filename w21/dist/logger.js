"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = startLogger;
const store_1 = require("./store");
function startLogger() {
    setInterval(() => {
        console.log(store_1.games);
    }, 5000);
}
// log state of the server
