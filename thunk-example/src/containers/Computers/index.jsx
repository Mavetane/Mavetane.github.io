
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComputers } from '../../actions/remove'


class Computers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      date: new Date().toLocaleDateString()
    }
  }
  avoidDuplicate = (name, title) => {
    const { myComputers } = this.props
    for (var i in myComputers) {
      if (myComputers[i].name === name) {
        return alert("name exists")
      }
      if (this.state.name <= 0) {
        return alert("Input field required")
      }
    }
    this.props.addComputer(name)
    this.setState({
      ...this.state,
      name: ""
    })

  }
  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return <div className="Computers-div">
      <h1 className="Computers-h1">Computers</h1>
      {
        this.props.myComputers.map(c =>
          <div className="Computers" key={c.name}>
            <div className="Smallest-div">
              <strong>Name:</strong>{c.name}<br />
              <strong>Date:</strong>{this.state.date}
              <button onClick={() => this.props.removeComputer(c.id)}>
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </div></div>)}
      <div className="Computers-input">
        <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
        <button onClick={() => this.avoidDuplicate(this.state.name)}><span class="glyphicon glyphicon-plus"></span></button>
      </div>
    </div>
  }

}

const mapStateToProps = (state) => ({
  myComputers: state.computers.myComputers,
})

const mapDispatchToProps = dispatch => ({
  addComputer: (name) => {
    dispatch({
      type: "ADD_COMPUTER",
      payload: { name }
    })
  },
  removeComputer: (id) => {
    dispatch(removeComputers(id))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Computers)