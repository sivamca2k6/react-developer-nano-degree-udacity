import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'
import * as BooksAPI from '../utils/BooksAPI'

/* to do - 
1.get api data props
2.search
3.store search data in state
4.bind to grid

*/

class BookSearch extends Component{

    constructor(props){
        super(props)
        this.state = {
            query : '',
            SearchBookDatas : []
        }
        this.OnSearchQueryChanged = this.OnSearchQueryChanged.bind(this);
    }
    
      componentDidMount(){
          this.setState({SearchBookDatas : this.props.BookDatas})
      }

      OnSearchQueryChanged = (event) => {
        let searchQuery = event.target.value;
         BooksAPI.search(searchQuery).then(filteredBooks => { // this api serach takes time .. can we filter by orignal
            //console.debug('BookSearch-OnSearchQueryChanged - ' + searchQuery)
            //console.debug(filteredBooks)
            this.setState({SearchBookDatas : filteredBooks,query : searchQuery })
          });
      }

    render(){  

        return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search" />
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.OnSearchQueryChanged}/>
                </div>
            </div>
            <div>
                <h2 className="bookshelf-title"> Matched Books - {this.state.SearchBookDatas ? this.state.SearchBookDatas.length : 0}</h2>
            </div>
            <div className="search-books-results">
                   <BooksGrid BookDatas={this.state.SearchBookDatas}  /> 
            </div>
        </div>

    )}
}

export default BookSearch

