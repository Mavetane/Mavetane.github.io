import React, { Component } from 'react';
import { TwitterShareButton, } from 'react-twitter-embed';
// import { TumblrShareButton } from 'react-share';

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

    // componentDidMount() {



    //     fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1000')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 loaded: true,
    //                 quotes: json
    //             })
    //         })

    // }

    showQuote = item => {
        this.setState({
            randomizedQuote: item,
            number: item.number
        })
    }

    nextQuote = () => {


        fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=100')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    loaded: true,
                    quotes: json
                })
            })
    }




    render() {

        return (

            <div id="wrapper">
                <p>Whatever</p>
                {this.state.quotes.length !== 0 ? this.state.quotes.splice(0, 1).map(item => (
                    <div id="quote-box" key={item.quote} onClick={() => this.showQuote(item)}>
                        <div className="quote-text"><h1>{item.quote}</h1></div>
                        <div className="author"><p><strong>-</strong>{item.character}</p></div>
                        <div className="Buttons">
                            <TwitterShareButton
                                url={'https://facebook.com/saurabhnemade'}
                                options={{ text: `${item.quote}`, via: 'saurabhnemade' }}
                            />
                            <button onClick={() => this.nextQuote()} value='Submit'>New quote</button>
                        </div>
                    </div>
                )) : <div className="Loader"></div>
                }
            </div>
        );
    }
}



export default Quotebox;