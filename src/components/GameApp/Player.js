import React, { Component } from 'react';
import Bubble from './Bubble';
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        const { game, ownProps } = this.props;

        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                {ownProps.isPlayer
                    ? <Bubble choice={game.player} />
                    : <Bubble choice={game.computer} />
                }
                <div className="mt-3">
                    <img
                        src={ownProps.avatar} alt={ownProps.avatar}
                        style={{ width: 250, height: 250 }}
                    />
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        game: state.gameReducer,
        ownProps: ownProps,
    }
}
export default connect(mapStateToProps)(Player);