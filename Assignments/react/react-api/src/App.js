import React, { Component } from 'react';
import DisplayCompanyNames from './components/DisplayCompanyNames';
import "./App.css";
import Healthservices from './components/Healthservices';
import Schools from './components/Schools';
import Municipalities from './components/Municipalities'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      isShowCompanyNames: false
    }

  }

  componentDidMount() {
    fetch('https://api-v2.intrinio.com/companies?api_key=OjUwMmVjMWQ5YWE3NGMzZDNlMWUxNzRmOTE4MmM1NjRj')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  showCompanies() {
    this.setState({
      isShowCompanyNames: !this.state.isShowCompanyNames
      ,

    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="Nav-bar">
            <ul className="List">
              <li><strong><button onClick={() => this.showCompanies()}>Companies</button></strong></li>
              <li><strong><Healthservices /></strong></li>
              <li><strong><Schools /></strong></li>
              <li><strong><Municipalities /></strong></li>
            </ul>
          </div>
          <header className="Header">The-Info-Hub
          </header>

          <div className="Menu">
          </div>
          <div className="Main">
            {this.state.isShowCompanyNames ? <DisplayCompanyNames names={this.state.items} /> : null}
            {<img src="data:image/png;base64,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"
              alt="Info" className="Responsive" />}
          </div>
        </div>
        {!this.state.isShowCompanyNames ? <div id="background-wrap">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div> : null}
      </div>
    );
  }
}

App.propTypes = {

};

export default App;

