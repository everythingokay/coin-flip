import React, { Component } from "react";

class Coin extends Component {
    render() {
        return (
            <div className="coin">
                <img src={this.props.data.imgSrc} alt={this.props.data.side} />;
            </div>
        )
    };
};

export default Coin;