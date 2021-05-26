import React,{Component} from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from '../utils/BooksAPI'

class BookShelfList extends Component{

    constructor(props){
        super(props)
        this.state = {
            BookDatas: [],
          }
          //console.debug("BookShelfList - constructor " + this.props.BookDatas.length);
    }

    componentDidMount(){
        //console.debug(this.props.OnUpdateBookDatas)
        if(this.props.OnUpdateBookDatas){
           BooksAPI.getAll().then(books => {
            this.props.OnUpdateBookDatas(books);
            })
        }
      }

    filterBookDatas= () =>{
        
        const  CurrentlyReadingBooks = this.props.BookDatas.filter( book => book.shelf === 'currentlyReading');
        const  WantToReadBooks = this.props.BookDatas.filter( book => book.shelf === 'wantToRead');
        const  ReadBooks = this.props.BookDatas.filter( book => book.shelf === 'read');
        
        //console.debug(` CurrentlyReadingBooks:${CurrentlyReadingBooks.length} WantToReadBooks:${WantToReadBooks.length} ReadBooks:${ReadBooks.length}`);
        
        return {CurrentlyReadingBooks,WantToReadBooks,ReadBooks}
    }
        
    render(){ 
       
        const {CurrentlyReadingBooks,WantToReadBooks,ReadBooks} = this.filterBookDatas();

        return (
        <div className="list-books-content">
            <BookShelf BookDatas={CurrentlyReadingBooks} Title ={'Currently Reading'} OnChangeShelf ={this.props.OnChangeShelf} />
            <BookShelf BookDatas={WantToReadBooks} Title ={'Want To Read'} OnChangeShelf ={this.props.OnChangeShelf} />
            <BookShelf BookDatas={ReadBooks} Title ={'Read'} OnChangeShelf ={this.props.OnChangeShelf} />
        </div>
    )}
}

export default BookShelfList

