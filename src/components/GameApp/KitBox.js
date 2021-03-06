import React, { Component } from 'react';
import { connect } from 'react-redux';

class KitBox extends Component {
    render() {
        return (
            <div className="d-flex  justify-content-center" style={{ height: '15%' }}>
                <img
                    className="img-kit"
                    src={'./img/bua.png'}
                    alt="{'./img/bua.png'}"
                    onClick={() => this.props.playerChoice('ROCK')}
                />
                <img
                    className="img-kit mx-3"
                    src={'./img/keo.png'}
                    alt="{'./img/keo.png'}"
                    onClick={() => this.props.playerChoice('SCISSORS')}
                />

                <img
                    className="img-kit"
                    src={'./img/bao.png'}
                    alt="{'./img/bao.png'}"
                    onClick={() => this.props.playerChoice('PAPER')}
                />

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return;
}

const mapDispatchToProps = (dispatch) => {
    return {
        playerChoice: (choice) => {
            dispatch({ type: 'PLAYER_TURN', payload: choice })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KitBox);