import React from 'react'
import { Route,Link, Switch } from 'react-router-dom'
// import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import BookShelfList from './components/BookShelfList'
import BookSearch from './components/BookSearch'


class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
        <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              
              <Switch>
                <Route exact path='/'> 
                  <BookShelfList /> 
                </Route>
                <Route exact path='/Search' component={BookSearch} />
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
