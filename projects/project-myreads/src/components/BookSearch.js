import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'
import * as BooksAPI from '../utils/BooksAPI'
//import BookShelfList from './BookShelfList'


class BookSearch extends Component{

    constructor(props){
        super(props)
        this.state = {
            query : '',
            BookDatas : []
        }
        this.OnSearchQueryChanged = this.OnSearchQueryChanged.bind(this);
    }
    
    componentDidMount (){
        console.log(' BookSearch componentDidMount');
        this.setState( { BookDatas : this.props.BookDatas })
    }
    
      OnSearchQueryChanged = (event) => {
        const searchQuery = event.target.value;

        BooksAPI.search(searchQuery).then(filteredBooks => { // this api search takes time .. ?? debug
            this.setState({query : searchQuery })

            if(typeof this.state.BookDatas !== undefined && this.state.BookDatas.length > 0 && 
                typeof filteredBooks !== undefined && filteredBooks.length > 0){

                this.state.BookDatas.forEach(book => {
                    filteredBooks.filter( bookf => bookf.id === book.id).map ( bookm => bookm.shelf = book.shelf  );    
                });
            }

            this.props.OnUpdateBookDatas(filteredBooks);
          });

      }

    render(){  
        console.debug('bookserach render')
        return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search" />
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.OnSearchQueryChanged}/>
                </div>
            </div>
            <div>
                <h2 className="bookshelf-title"> Matched Books ({this.props.BookDatas ? this.props.BookDatas.length : 0})</h2>
            </div>
            <div className="search-books-results">
                   <BooksGrid BookDatas={this.props.BookDatas}  OnChangeShelf ={this.props.OnChangeShelf}  /> 
            </div>
        </div>

    )}
}

export default BookSearch

