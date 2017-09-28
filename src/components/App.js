import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddBookBtnContainer from './../containers/AddBookBtnContainer';
import AddBookModal from './AddBookModal';
import BookListContainer from './../containers/BookListContainer';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <AddBookBtnContainer />
        {/* <AddBookModal /> */}
        <BookListContainer />
      </div>
    );
  }
}

export default App;
