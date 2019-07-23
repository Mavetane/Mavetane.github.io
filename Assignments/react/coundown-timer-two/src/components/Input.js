import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            capturedTime: [],
            isToggle: false
        }
        this.startCount = this.startCount.bind(this)
        // this.stopInterval = this.stopInterval.bind(this)
    }


    count(e) {

        this.setState({
            seconds: e.target.value,

        })

    }

    startCount() {
        this.setState({
            isToggle: true
        })
        var interval = setInterval(() => {

            if (this.state.seconds === 0) {

                var getTime = this.state.capturedTime;
                getTime.push(new Date().toLocaleTimeString())
                // console.log("fff", getTime)
                this.setState({
                    capturedTime: getTime,
                    isToggle: false
                });
                clearInterval(interval)
                return 0
    
            }

            this.setState({
                seconds: this.state.seconds - 1,

            })



        }, 1000);
    }


    reset() {

        this.setState({
            seconds: 0,
        })
    }



    render() {
        //    console.log("my state", this.state.capturedTime)
        return (
            <div className="div">
                <div className="div-2">
                    <h2 className="h2">{this.state.seconds}</h2>
                </div>
               
               { this.state.isToggle  === false ? <input value={this.state.seconds}
                onChange={(e) => this.count(e)}
                 id="myInput"></input>: null}
            <div>
                
                <button className="button-1" onClick={() => this.startCount()}>Start</button>
                
                <button className="button-2" onClick={() => this.reset()}>Reset</button>
                <div className="displayed-time">
                <view><text>{this.state.capturedTime.map((capturedTime) => <li>{this.state.capturedTime}</li>)}</text></view>
                </div>         
            </div>
            </div>
        );
    }
}

Input.propTypes = {

};

export default Input;
