import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tebza extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleState = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleMtate = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <label >{count}</label>
                <button onClick={()=>this.handleState()}>+</button>
                <button onClick={()=>this.handleMtate()}>-</button>
            </div>
        );
    }
}

React.propTypes = {

};

export default Tebza;