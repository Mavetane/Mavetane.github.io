
import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import Pagination from '../Books/Pagination'
import { displayButton } from '../../actions/toggle'
import { ADD_BOOK, REMOVE_BOOK } from '../../redux/books/actionTypes'
import { addBook, getBooks, removeBook, editBook, searchContent } from '../../redux/books/backend'

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      title: "",
      editedTitle: "",
      editMode: false,
      id: "",
      search: "",
      toggleSearch: false,
      findAurthor: "",
      findTitle: "",
      loading: false,
      currentPage: 1,
      postsPerPage: 5
    }
  }
  componentDidMount() {
    this.props.getBooks(1, 5)
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
        return alert("Please enter names")
      }
    }
    this.props.addBook(name, title)
    this.setState({
      ...this.state,
      name: "",
      title: ""
    })
    this.props.getBooks(1, 5)
  }
  
  changeEdit = (title, id) => {
    this.setState({
      editMode: !this.state.editMode,
      editedTitle: title,
      id: id,
      date: new Date().toLocaleDateString()
    })

  }
  handleEdit = (title, id) => {
    const { availableBooks } = this.props
    this.props.editBook(title, id)
    this.setState({
      editMode: !this.state.editMode,
      id: id
    })
  }
  handleSearch = (e) => {
    this.props.searchBook(this.state.findAurthor, this.state.findTitle)
    this.setState({
      search: e.target.value.substr(0, 20)
    })
  }
  isToggle = () => {
    this.setState({
      toggleSearch: !this.state.toggleSearch
    })
  }

  
  render() {
    const { search, name, title, toggleSearch, currentPage, postsPerPage } = this.state
    let filteredBooks = this.props.availableBooks
      .map(post => ({ ...post, date: new Date(post.date) }))
      .sort((a, b) => {
        return b.date.getTime() - a.date.getTime()
      })

    //Current post

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPost = filteredBooks.slice(indexOfFirstPost, indexOfLastPost)

    return <div>
      <div>
        <h1 className="Books-h1">Books</h1>
        {toggleSearch ? <input type="text"
          value={search}
          class="books-search-input"
          placeholder="search"
          onChange={this.handleSearch} /> : null}
        <Pagination postsPerPage={postsPerPage}
          totalPosts={filteredBooks.length}
          currentPage={currentPage} />
        <button id="search-books" type="button" class="btn btn-info" onClick={() => this.isToggle()}>
          <span class="glyphicon glyphicon-search"></span> Search
        </button>
        <div> {currentPost.map(b =>
          <div className="Books-2" onClick={(name) => this.props.toggleBook(b.name)} key={b.name}>
            <div className="Flexing">
              <div><strong>Author:</strong> {b.name}</div><br />
              <div><strong>Title/s:</strong> {b.title}</div>
              <strong>Date: {moment(b.date).format('LLL')}</strong>

              <span style={{ margin: "20px" }} onClick={() =>
                this.changeEdit(b.title, b.id)}
                class="glyphicon">&#x270f;
              </span>
              <button onClick={() => this.props.removeBook(b.id)}>
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </div>
          </div>)}</div>
        {this.state.editMode == false ? <div className="Inputs">
          <input type="text" value={name}
            placeholder="Enter Author" name="name"
            className="Author"
            onChange={e => this.setState({ name: e.target.value })} />
          <br />
          <input type="text" value={title}
            placeholder="Enter Title"
            className="Title"
            name="title" onChange={e =>
              this.setState({ title: e.target.value })}
          />
          <button onClick={() => this.preventDuplication(name, title)}>
            <span class="glyphicon glyphicon-plus"></span>
          </button>
        </div> : null}
      </div>

      {this.state.editMode ?
        <div>
          <input
            type="text"
            className="Edit-input"
            placeholder="edit title"
            onChange={e => this.setState({ editedTitle: e.target.value })}
          />
          <button
            className="Save-edit-button"
            onClick={() =>
              this.handleEdit(this.state.editedTitle, this.state.id)}>
            <span class="glyphicon glyphicon-ok"></span>
          </button>
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
  searchBook: (findAurthor, findTitle) => {
    dispatch(searchContent(findAurthor, findTitle))
  },
  getBooks: () => {
    dispatch(getBooks(1, 5))
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