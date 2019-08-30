import React, { Component } from 'react';
import Loader from './Loader'
class Schools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSchools: false
        }
    }

    toggle = () => {
        this.setState({
            isShowSchools: !this.state.isShowSchools
        })

    }
    render() {
        return (
            <div>

                <button onClick={() => this.toggle()}>Schools</button>
                {this.state.isShowSchools ? <div><h5>Info coming soon!</h5>
                    <Loader /></div> : null}

            </div>
        );
    }
}

Schools.propTypes = {

};

export default Schools;