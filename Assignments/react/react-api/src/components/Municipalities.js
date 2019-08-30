import React, { Component } from 'react';
import Loader from './Loader'
class Municipalities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMunicipals: false
        }
    }

    info = () => {

        console.log("ddd")
        return (
            <div>Info to come soon!</div>
        )
    }
    toggle = () => {
        this.setState({
            isShowMunicipals: !this.state.isShowMunicipals
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggle()}>Municipalities</button>
                {this.state.isShowMunicipals ? <div><h5>Info coming soon!</h5>
                    <Loader /></div> : null}


            </div>
        );
    }
}

Municipalities.propTypes = {

};

export default Municipalities;