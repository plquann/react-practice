import React, { Component } from 'react';
import './Bubble.css';
import { connect } from 'react-redux';

class Bubble extends Component {
    renderImage = (choice) => {
        switch (choice) {
            case 'ROCK':
                return './img/bua.png';
            case 'PAPER':
                return './img/bao.png';
            case 'SCISSORS':
                return './img/keo.png';
            default:
        }
    }
    render() {
        const { game, isPlayer } = this.props;
        const choice = isPlayer ? game.player : game.computer;
        return (
            <div className="speech-bubble">
                <img
                    src={this.renderImage(choice)} alt={this.renderImage(choice)}
                    style={{ width: 80, height: 120 }}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        game: state.gameReducer,
    }
}
export default connect(mapStateToProps)(Bubble);




