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
        let keyframes = `@keyframes randomComputer${Date.now()}{
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}

        }`
        return (
            <div className="speech-bubble">
                <style>{keyframes}</style>
                <img
                    src={this.renderImage(choice)} alt={this.renderImage(choice)}
                    style={{ width: 80, height: 120, animation: `randomComputer${Date.now()} 0.5s`, }}
                />
            </div>
        )
    }
};




