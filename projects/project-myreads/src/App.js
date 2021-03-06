import React from 'react'
import { Route,Link, Switch } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import BookShelfList from './components/BookShelfList'
import BookSearch from './components/BookSearch'


class BooksApp extends React.Component {
  state = {
    BookDatas : []
  }


  updateBookDatas=(books) => {
    this.setState({BookDatas: books})
  }

  changeBookShelf = (bookToUpdate,shelf) => {
    const books = [...this.state.BookDatas] //shallow copy
    const index = books.findIndex(x=>x.id === bookToUpdate.id);

    if(books[index]){ 
      books[index].shelf = shelf;
      this.setState ( (currentState) => ({ 
        BookDatas : books.filter(x=>x.shelf !== 'none'),
      }));
      BooksAPI.update( books[index],shelf);

      console.log(`${bookToUpdate.title} ${bookToUpdate.shelf} Shelf Change to ${shelf}  `)
    }
  }

  render() {
    // console.debug('app render  ' +  this.state.BookDatas.length)
    // console.debug(this.state.BookDatas)
    return (
        <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              
              <Switch>
                <Route exact path='/'> 
                  <BookShelfList BookDatas={this.state.BookDatas} OnChangeShelf ={this.changeBookShelf} OnUpdateBookDatas = {this.updateBookDatas}  /> 
                </Route>
                <Route exact path='/Search'  >
                    <BookSearch BookDatas={this.state.BookDatas}  OnChangeShelf ={this.changeBookShelf}  OnUpdateBookDatas = {this.updateBookDatas} /> 
                </Route>
              </Switch>

              <div className="open-search">
                <Link to='/Search'> <button></button> </Link>
              </div>
            </div>
        </div>
    )
  }
}

export default BooksApp
