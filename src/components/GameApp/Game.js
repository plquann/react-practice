import React, { Component } from 'react';
import Player from './Player';
import GameState from './GameState';
import KitBox from './KitBox';
import './Game.css';
import { connect } from 'react-redux';

class Game extends Component {
    render() {
        const { player, computer } = this.props.game;
        return (
            <div className="game">
                <h1 className="text-center mt-3 text-white">ROCK - PAPER - SCISSORS</h1>
                <div className="row text-center">
                    <div className="col-4">
                        <Player choice={player} avatar={'./img/player.png'} />
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
                        <Player choice={computer} avatar={'./img/playerComputer.png'} />
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
            let count = 10;
            let randomComputer = setInterval(() => {
                dispatch({ type: 'GAME_START' });
                count++;
                if (count >= 10) clearInterval(randomComputer);
            }, 100);
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);





