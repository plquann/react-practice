import React, { Component } from 'react';
import './Bubble.css';

export default class Bubble extends Component {
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
        const { choice } = this.props;
        return (
            <div className="speech-bubble">
                <img
                    src={this.renderImage(choice)} alt={this.renderImage(choice)}
                    style={{ width: 80, height: 120, }}
                />
            </div>
        )
    }
};




