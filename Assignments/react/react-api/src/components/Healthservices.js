import React, { Component } from 'react';
import Loader from './Loader'
class Healthservices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowHealthServices: false
        }
    }
 
    toggle = () => {
        this.setState({
            isShowHealthServices: !this.state.isShowHealthServices
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggle()}>Healthservices</button>
                {this.state.isShowHealthServices ? <div><h5>Info coming soon!</h5> <Loader/></div> : null}
                

            </div>
        );
    }
}

Healthservices.propTypes = {

};

export default Healthservices;