import React, { Component } from 'react';
import "../App.css"


class SelectCompany extends Component {
    render() {

        return (
            <div className="Info">
                <div>{this.props.name != null ? <h1> {this.props.name.name}</h1> : null}</div>
                <div className="Align">
                    {this.props.name != null ? <p><strong>Stock exchange category</strong>: {this.props.name.ticker}</p> : null}
                    {this.props.name != null ? <p><strong>Number of employees</strong>: {this.props.name.cik * 1000}</p> : null}
                    {this.props.name != null ? <p><strong>Industry group</strong>: {this.props.name.lei}</p> : null}
                    {this.props.name != null ? <p><strong>Industry category</strong>: {this.props.name.id}</p> : null}
                    {this.props.name != null ? <img src="https://www.logolynx.com/images/logolynx/79/79f06959da30dd72c47c21fce23642de.jpeg" className="Img"/> : null}
                </div>

            </div>
        );
    }
}

SelectCompany.propTypes = {

};

export default SelectCompany;