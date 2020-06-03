import React, { Component } from "react";
class Decrement extends Component {
    constructor(props){
        super(props);
        this.state = { number: props.start };
    }
    handleDecrement = () => {
        this.setState({ number: this.state.number - 1});
    };
    render() {
        return (
            <div>
                {this.state.number}{" "}
                <button onClick={this.handleDecrement}>decrement</button>
            </div>
        );
    }
}
export default Decrement;