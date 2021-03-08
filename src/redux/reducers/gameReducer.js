const initialState = {
    player: 'ROCK',
    computer: 'ROCK',
    winner: 'I AM IRON MAN! I LOVE U 3000',
    won: 0,
    rounds: 0,
};

const arrKit = ['ROCK', 'PAPER', 'SCISSORS'];
const rand = () => Math.floor(Math.random() * 3);
const isWon = (player, computer) => {
    if (player === computer)
        return 0;
    switch (player) {
        case 'ROCK':
            if (computer === 'PAPER') return -1;
            return 1;
        case 'PAPER':
            if (computer === 'SCISSORS') return -1;
            return 1;
        case 'SCISSORS':
            if (computer === 'ROCK') return -1;
            return 1;
        default:
    }
}

export const gameReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'PLAYER_PICK': {
            return { ...state, player: payload };
        }
        case 'COMPUTER_PICK': {
            return { ...state, computer: arrKit[rand()] };
        }
        case 'GAME_START': {
            switch (isWon(state.player, state.computer)) {
                case 1:
                    return {
                        ...state,
                        winner: 'I am Iron Man! Iron Man won!',
                        won: state.won + 1,
                        rounds: state.rounds + 1,
                    };
                case -1:
                    return {
                        ...state,
                        winner: 'I am inevitable! Thanos won!',
                        rounds: state.rounds + 1,
                    };
                case 0:
                    return {
                        ...state,
                        winner: 'Tie!!! Lets fight again!',
                        rounds: state.rounds + 1,
                    };
                default:
                    return { ...state };
            }
        }
        default:
            return { ...state };
    }
}
