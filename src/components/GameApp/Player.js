import React, { Component } from 'react';
import Bubble from './Bubble';
import { connect } from 'react-redux';

export default class Player extends Component {
    render() {
        const { choice, avatar } = this.props;
        
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Bubble choice={choice}/>
                <div className="mt-3">
                    <img
                        src={avatar} alt={avatar}
                        style={{ width: 250, height: 250 }}
                    />
                </div>

            </div>
        )
    }
};
