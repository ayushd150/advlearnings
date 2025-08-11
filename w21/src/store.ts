interface Game{
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}

//singletons take away
export class GameManager{
    games: Game[]=[]
    constructor(){
        this.games = [];
    }
    addMove(gameId: string, move: string){
        console.log(`Adding move ${move} to game ${gameId}`)
        const game = this.games.find(game => game.id === gameId)
        game?.moves.push(move)
    }
    addGame(gameId: string){
        const game={
            id: gameId,
            whitePlayerName: 'Ayush',
            blackPlayerName: 'Aram',
            moves:[]
        }
    }
}



export const games: Game[] = [];


// in-memory variable

// initially games.push or games[1i.moves.push()