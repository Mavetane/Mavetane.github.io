
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { displayButton } from '../../actions/toggle'
// import { removeBook } from '../../actions/remove'
import { ADD_BOOK, REMOVE_BOOK } from '../../redux/books/actionTypes'
import {addBook, getBooks, removeBook, editBook} from '../../redux/books/backend'

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      title: "",
      editedTitle: "",
      editMode: false,
      id: ""
    }
  }
  componentDidMount(){
    this.props.getBooks()
  }
  preventDuplication = (name, title) => {
    const { availableBooks } = this.props
    for (var i in availableBooks) {
      if (availableBooks[i].name === name) {
        return alert("name already exists")
      } else if (availableBooks[i].title === name) {
        return this.state.title
      }
      if (this.state.name <= 0) {
        return alert("Input field required")
      }
    }
    this.props.addBook(name, title)
    this.setState({
      ...this.state,
      name: "",
      title: ""
    })
  }
  changeEdit = (title, id) => {
    this.setState({
      editMode: !this.state.editMode,
      editedTitle: title,
      id: id,
      date: new Date().toLocaleDateString()
    })

  }
  handleEdit = (title,id) => {
    const {availableBooks}=this.props
    // let book = availableBooks.find((book => book._id === id))
    
    this.props.editBook(title,id)
    this.setState({
      editMode: !this.state.editMode,
      id: id
    })
  }

  render() {
    return <div>
      <div>
        <h1 className="Books-h1">Books</h1>
        <div> {this.props.availableBooks.map(b =>
          <div className="Books-2" onClick={(name) => this.props.toggleBook(b.name)} key={b.name}>
            <div className="Flexing">
              <div><strong>Author:</strong> {b.name}</div><br />
              <div><strong>Title/s:</strong> {b.title}</div>
              <strong>Date: {new Date().toLocaleDateString()}</strong>
              <span style={{ margin: "20px" }} onClick={() =>
                this.changeEdit(b.tittle, b._id)}
                class="glyphicon">&#x270f;
              </span>
              <button onClick={() => this.props.removeBook(b._id)}>
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </div>
          </div>)}</div>
        <div className="Inputs">
          <input type="text" value={this.state.name}
            placeholder="Enter Author" name="name"
            className="Author"
            onChange={e => this.setState({ name: e.target.value })} />
          <br />
          <input type="text" value={this.state.title}
            placeholder="Enter Title"
            className="Title"
            name="title" onChange={e =>
              this.setState({ title: e.target.value })}
          />
          <button onClick={() => this.preventDuplication(this.state.name, this.state.title)}>
            <span class="glyphicon glyphicon-plus"></span>
          </button>
        </div>
      </div>

      {this.state.editMode ?
        <div>
          <input
            type="text"
            onChange={e => this.setState({ editedTitle: e.target.value })}
          />
          <button onClick={() => this.handleEdit(this.state.editedTitle, this.state.id)}>Save</button>
        </div> : null}
    </div>
  }

}

const mapStateToProps = (state) => ({
  availableBooks: state.books.availableBooks,
})

const mapDispatchToProps = dispatch => ({
  addBook: (name, title) => {
    dispatch(addBook(name, title))
  },
  getBooks: () => {
    dispatch(getBooks())
  },
  editBook: (title, id) => {
    dispatch(editBook(title, id))
  },
  removeBook: (id) => {
    dispatch(removeBook(id))
  },
  toggleBook: (name) => {
    dispatch(displayButton(name))
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(Books)