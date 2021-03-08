import React, { Component } from 'react';
import { connect } from 'react-redux';

class KitBox extends Component {
    styleActive = (choice, current) => {
        return choice === current ? `3px solid orangered` : `1px solid orangered`;
    }
    render() {
        const { active } = this.props;
        return (
            <div className="d-flex  justify-content-center" style={{ height: '15%' }}>
                <img
                    className="img-kit"
                    src={'./img/bua.png'}
                    alt="{'./img/bua.png'}"
                    style = {{border: `${this.styleActive(active, 'ROCK')}`}}
                    onClick={() => this.props.playerChoice('ROCK')}
                />
                <img
                    className="img-kit mx-3"
                    src={'./img/keo.png'}
                    alt="{'./img/keo.png'}"
                    style = {{border: `${this.styleActive(active, 'SCISSORS')}`}}
                    onClick={() => this.props.playerChoice('SCISSORS')}
                />

                <img
                    className="img-kit"
                    src={'./img/bao.png'}
                    alt="{'./img/bao.png'}"
                    style = {{border: `${this.styleActive(active, 'PAPER')}`}}
                    onClick={() => this.props.playerChoice('PAPER')}
                />

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        active: state.gameReducer.player,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playerChoice: (choice) => {
            dispatch({ type: 'PLAYER_PICK', payload: choice })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KitBox);