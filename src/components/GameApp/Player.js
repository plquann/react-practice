import React, { Component } from 'react';
import Bubble from './Bubble';

export default class Player extends Component {
    render() {
        const { isPlayer, avatar } = this.props;

        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Bubble isPlayer={isPlayer} />
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
