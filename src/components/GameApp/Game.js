import React, { Component } from 'react';
import Player from './Player';
import GameState from './GameState';
import KitBox from './KitBox';
import './Game.css';
import { connect } from 'react-redux';

class Game extends Component {
    render() {
        return (
            <div className="game">
                <h1 className="text-center mt-3 text-white">ROCK - PAPER - SCISSORS</h1>
                <div className="row text-center">
                    <div className="col-4">
                        <Player isPlayer={true} avatar={'./img/player.png'} />
                        <KitBox />
                    </div>
                    <div className="col-4">
                        <GameState />
                        <div className="text-center mt-4">
                            <button
                                className="btn btn-success"
                                onClick={() => this.props.playGame()}
                            >PLAY GAME</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <Player isPlayer={false} avatar={'./img/playerComputer.png'} />
                    </div>
                </div>

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        game: state.gameReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            const randomComputer = setInterval(() => {
                dispatch({ type: 'COMPUTER_PICK' });
                count++;
                if (count > 20) {
                    clearInterval(randomComputer);
                    dispatch({ type: 'GAME_START' });
                }
            }, 80);
            // dispatch({ type: 'GAME_START' });
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);





