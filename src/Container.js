import React, { Component } from 'react';
import { choice } from './helpers';

class Container extends Component {
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
        this.handleClick = this.handleClick.bind(this);
    };
    flipCoin() {
        const newSide = choice(this.props.coins);
        this.setState(st => {
            let newState = {
                ...st,
                currentSide: newSide,
                numFlip: st.numFlip +1
            }
            if(newSide.side === "head") {
                newState.numHead += 1;
            } else {
                newState.numTail += 1;
            }
            return newState;
        });
    };
    handleClick(e) {
        this.flipCoin();
    };
    render() {
        return(
            <div className="flip">
                <h2>Let's Flip a Coin !</h2>
                <button onClick={this.handleClick}>Flip</button>
                <p>Out of {this.state.numFlip} flips, 
                there have been {this.state.numHead} heads and {this.state.numTail} tails.</p>
            </div>
        )
    }
};

export default Container;