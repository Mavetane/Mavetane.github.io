import React, { Component } from 'react';

let interval;
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: "",
            capturedTimes: [],
            isToggle: false,
            isReset : false
                }
        this.startCount = this.startCount.bind(this)
        this.reset = this.reset.bind(this)
        // this.stopInterval = this.stopInterval.bind(this)
    }


    count(e) {
        this.setState({
            seconds: e.target.value,

        })


    }

    startCount() {
        if (this.state.seconds !== ""){
            this.setState({
                isToggle: true
            })

            if (this.state.seconds > 0) {
             interval = setInterval(() => {

                if (this.state.seconds === 0) {
                    this.setState({
                        capturedTimes: [...this.state.capturedTimes, new Date()],
                        isToggle: false,
                        seconds: ""
                    });
                    clearInterval(interval)
                    return this.seconds
        
                }
    
                if (this.state.seconds > 0) {
    
    
                    this.setState({
                        seconds: this.state.seconds - 1,
        
                    })
                }
    
    
    
            }, 1000);
        }       
        

    }
    }


    reset() {

        this.setState({
            isToggle: false,
            seconds: "",
            isReset:true
            
        })

        clearInterval(interval)


    }



    render() {
        //    console.log("my state", this.state.capturedTimes)
        return (
            <div className="div">
                <div className="div-2">
                    <h2 className="h2">{this.state.seconds}</h2>
                </div>
               
               { this.state.isToggle  === false ? 
              <input value={this.state.seconds}
                onChange={(e) => this.count(e)}
                 id="myInput">
              </input>: null}

                <button className="button-1" onClick={() => this.startCount()}>Start</button>
                
                <button className="button-2" onClick={() => this.reset()}>Reset</button>
            <div className="grid-container">
       
                <div className="captured-times">
                <p>Your list of captured times</p>
                <view><text>{this.state.capturedTimes.map(
                    (capturedTimes) => <li>{capturedTimes.toLocaleTimeString()}</li>)
                    }</text></view>
                </div>

            </div>

            </div>
        );
    }
}

Input.propTypes = {

};

export default Input;
