import React, { Component } from 'react';
import SelectCompany from './SelectCompany'
import "../App.css"



class DisplayCompanyName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoToggle: false,
            selectedCompany: null,
            number:0
        }
    }

    showName(item) {
        this.setState({
            infoToggle: !this.state.infoToggle,
            selectedCompany: item,
            number : item.number
        })
    }

    render() {

        
        return (

            <div className="DisplayCompanyName">
                        <div>
                    {this.props.names.length != 0 ? this.props.names.companies.map(item => (
                        <li key={item.id} onClick={() => this.showName(item)}>
                            <strong>Name</strong> : {item.name};
                        </li>
                    )) : <div className="Loader"></div>}
                        </div>
                
                        <div>
                            <SelectCompany name={this.state.selectedCompany}   />
                        </div>
            </div>
        );

    }

}


DisplayCompanyName.propTypes = {

};

export default DisplayCompanyName;
