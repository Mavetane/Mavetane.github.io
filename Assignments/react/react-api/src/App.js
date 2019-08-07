import React, { Component } from 'react';
import DisplayCompanyNames from './components/DisplayCompanyNames'
import "./App.css"

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
              <header className="Header">The-Info-Hub</header>


              <div className="Menu">
                <h5>Click the button below to display a list of companies:</h5>
                <button onClick={() => this.showCompanies()}>Companies</button>
              </div>
              <div className="Main">
              {this.state.isShowCompanyNames ? <DisplayCompanyNames names={this.state.items} /> : null}
              </div>
              
            
            </div>
            {!this.state.isShowCompanyNames? <div id="background-wrap">
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
</div>: null}
            </div>
    );



  }
}

App.propTypes = {

};

export default App;

