"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.games = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: 'Ayush',
            blackPlayerName: 'Aram',
            moves: []
        };
    }
}
exports.GameManager = GameManager;
exports.games = [];
// in-memory variable
