import React, { Component } from 'react';
import SearchBarContainer from './../containers/SearchBarContainer';
import AddBookBtnContainer from './../containers/AddBookBtnContainer';
import AddBookModalContainer from './../containers/AddBookModalContainer';
import BookListContainer from './../containers/BookListContainer';
import './../styles/App.css';

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className='AppWrapper'>
        <div className="App">
          <SearchBarContainer />
          <AddBookBtnContainer />
          <BookListContainer />
        </div>
        <AddBookModalContainer />
      </div>
    );
  }
}

export default App;
