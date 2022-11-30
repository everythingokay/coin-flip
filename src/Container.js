import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class Container extends Component {
    static defaultProps = {
        coins: [
            { side: 'head', imgSrc: "https://tinyurl.com/55cv2btr" },
            { side: 'tail', imgSrc: "https://tinyurl.com/2s38f3rw" }
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
            return {
                currentSide: newSide,
                numFlip: st.numFlip + 1,
                numHead: st.numHead + (newSide.side === 'head' ? 1 : 0),
                numTail: st.numTail + (newSide.side === 'tail' ? 1 : 0)
            }
        });
    };
    handleClick(e) {
        this.flipCoin();
    };
    render() {
        return(
            <div className="flip">
                <h2>Let's Flip a Coin !</h2>
                {this.state.currentSide && <Coin data={this.state.currentSide} />}
                <button onClick={this.handleClick}>Flip</button>
                <p>Out of {this.state.numFlip} flips, 
                there have been {this.state.numHead} heads and {this.state.numTail} tails.</p>
            </div>
        )
    }
};

export default Container;