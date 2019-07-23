import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "60"
    };
    // this.seconds = this.seconds.bind(this);
  }

    countdown() {
      this.setState(state => ({
        seconds: state.seconds -1
      }));
    }

    componentWillMount() {
      this.interval = setInterval(() =>this.countdown(), 1000);
    }

  render() {
    return (
      <div className="Start">
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

Start.propTypes = {

};

export default Start;