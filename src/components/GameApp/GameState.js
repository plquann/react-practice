import React, { Component } from 'react';
import {connect} from 'react-redux';

class GameState extends Component {
    render() {
        const {winner, won, rounds} = this.props.game;
        return (
            <div className="container text-center mt-5">
                <div className="display-4" style={{color: 'orange'}}>
                    {winner}
                </div>
                <div className="display-4 mt-2">
                    Goals: <span className="text-warning">{won}</span>
                </div>
                <div className="display-4 mt-2">
                    Rounds: <span className="text-primary">{rounds}</span>
                </div>
            </div>
        )
    }
};
const mapStateToProps = (state)=>{
    return {
        game: state.gameReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(GameState);
