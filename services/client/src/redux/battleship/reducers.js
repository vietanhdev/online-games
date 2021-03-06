import battleshipConstants, {ShipSize} from './constants'
import Utilities from './utilities';


export const getInitState = () => {
    let rowInit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let boardInitState = [rowInit, rowInit, rowInit, rowInit, rowInit, rowInit, rowInit, rowInit, rowInit, rowInit]
    const initState = {
        myPublicId: "",
        shipArrangement: {
            vertical: true,
            selectedShipSize: ShipSize.GIANT
        },
        gameState: {
            isInitialState: true,
            gameOver: false,
            winnerId: "",
            boardWidth: 10,
            boardHeight: 10,
            maxNumberOfShips: {
                "GIANT": 1,
                "LARGE": 2,
                "MID": 3,
                "SMALL": 4
            },
            isEnoughPlayer: false,
            isMyRoom: false,
            gameName: "BattleShip",
            roomId: "",
            isMyTurn: false,
            turn: {
                fullname: "",
                playerPublicId: ""
            },
            player1: {
                fullname: "",
                playerPublicId: "", 
                data: boardInitState,
                ships: [],
                shipsReady: false
            },
            player2: {
                fullname: "",
                playerPublicId: "", 
                data: boardInitState,
                ships: [],
                shipsReady: false
            }
        }
    }
    
    return initState;
}

export const battleshipReducer = (state = getInitState(), action) =>  {
    let newState = {};
    switch (action.type) {
        case battleshipConstants.SELECT_SHIP_SIZE:
            return {...state, shipArrangement:{...state.shipArrangement, selectedShipSize: action.payload} }
        case battleshipConstants.TOGGLE_SHIP_ROTATE:
            return {...state, shipArrangement:{...state.shipArrangement, vertical: !state.shipArrangement.vertical} }
        case battleshipConstants.ADD_SHIP:
            return {
                ...state,
                gameState: {
                    ...state.gameState,
                    player1: {
                        ...state.gameState.player1,
                            ships: [...state.gameState.player1.ships, {
                                x: action.payload.x,
                                y: action.payload.y,
                                vertical: action.payload.vertical,
                                sink: false,
                                size: action.payload.size
                            }]
                    }
                }
            }
        case battleshipConstants.CLEAR_SHIP:
            return {
                ...state,
                gameState: {
                    ...state.gameState,
                    player1: {
                        ...state.gameState.player1,
                        ships: []
                    }
                }
            }
        case battleshipConstants.UPDATE_GAME_STATE:
            return action.payload;
        default:
            return state
    }
}