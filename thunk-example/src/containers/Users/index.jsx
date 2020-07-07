import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllUsers, addUser, removeUser } from '../../redux/users/thunks';
// import {  } from '../../actions/remove'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: "",
      date: new Date().toLocaleDateString(),
      search: ""
    }
  }
  componentDidMount() {
    this.props.getAllUsers()
  }
  setValue = (e) => {
    this.setState({ newUser: e.target.value })
  }
  addUser = () => {
    const isFound = this.props.users.find(user => {
      return user.name === this.state.newUser
    })
    if (isFound) {
      alert("Name exists")
      return
    }

    if (this.state.newUser.length <= 0) {
      return alert("Input field required");
    }
    this.props.addUser({ name: this.state.newUser })
    this.setState({ newUser: '' })
  }
  updateSearch = (event) => {
    this.setState({search: event.target.value.substr(0,
      20)});
  }
  render() {
    const { date, newUser} = this.state
    let { users } = this.props
    return <div>
      <h1 className="Users-h1">Users</h1>
      {users.map(u => <div className="Users-2">
        <div className="Small-div"><strong>
          <h7>Name:</h7></strong><h7>{u.name}</h7><br />
          <strong><h7>Date:</h7></strong>{date}
          <button onClick={() => this.props.removeUser(u.id)}>
            <span class="glyphicon glyphicon-remove"></span>
          </button>
        </div>
      </div>)}
      <input type="text" className="Users-input"
        placeholder="Enter Name"
        onChange={this.setValue}
        value={newUser}
      />
      <button onClick={this.addUser} className="Add-user-button">
        <span class="glyphicon glyphicon-plus"></span>
      </button>
    </div>
  }
}

const mapStateToProps = (state) => ({
  users: state.users.all,
})

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => {
    dispatch(getAllUsers())
  },
  addUser: (user) => {
    dispatch(addUser(user))
  },
  removeUser: (id) => {
    dispatch(removeUser(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)