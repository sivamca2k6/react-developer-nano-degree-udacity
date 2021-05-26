import React from 'react'
import { Route,Link, Switch } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import BookShelfList from './components/BookShelfList'
import BookSearch from './components/BookSearch'



/* to do - 
1.get api data 
2.store data in state
4.pass to compo
*/

class BooksApp extends React.Component {
  state = {
    BookDatas : []
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      //console.debug(books)
      this.setState({BookDatas : books})
    })
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
                  <BookShelfList BookDatas={this.state.BookDatas}  /> 
                </Route>
                <Route exact path='/Search'  >
                    <BookSearch BookDatas={this.state.BookDatas}  /> 
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
