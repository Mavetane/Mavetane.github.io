import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Quotebox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            loaded: false,
            randomizedQuote: null,
            number: 0
        }

    }

    componentDidMount() {
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1000')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    loaded: true,
                    quotes: json
                })
            })
    }

    showQuote = item => {
        this.setState({
            randomizedQuote: item,
            number: item.number
        })
    }


    render() {
        return (
            <div>
                <div>
                    {/* {this.state.quotes.length !== 0 ? this.state.quotes.quote.map(item =>(
                        <li key={item.quote} onClick={() => this.showQuote(item)}>
                            <strong>Quote:</strong>{item.quote}
                        </li>
                    )) : "Loading..."} */}
                </div>

            </div>
        );
    }
}

Quotebox.propTypes = {

};

export default Quotebox;