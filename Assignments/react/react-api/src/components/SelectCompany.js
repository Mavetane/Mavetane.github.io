import React, { Component } from 'react';
import "../App.css"


class SelectCompany extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        
        return (
            <div className="Info">
            <h5>Click on the company name to display more information here:</h5>
                <div>{this.props.name != null ? <h1> {this.props.name.name}</h1> : null}</div>
                <div className="Align">
                {this.props.name != null ? <p><strong>Industry group</strong>: {this.props.name.ticker}</p> : null}
                {this.props.name != null ? <p><strong>Number of employees</strong>: {this.props.name.cik}</p> : null}
                {this.props.name != null ? <p><strong>Stock exchange category</strong>: {this.props.name.lei}</p> : null}
                {this.props.name != null ? <p><strong>Industry category</strong>: {this.props.name.id}</p> : null}
                </div>
            </div>
        );
    }
}

SelectCompany.propTypes = {

};

export default SelectCompany;