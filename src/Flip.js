import React, { Component } from 'react';

class Flip extends Component {
    static defaultProps = {
        coins: [
            { side: 'head', imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: 'tail', imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currentSide: null,
            numFlip: 0,
            numHead: 0,
            numTail: 0
        }
    };
    render() {
        return(
            <div className="flip">
                <h2>Let's Flip a Coin !</h2>
                <button onClick="">Flip</button>
            </div>
        )
    }
}