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
        console.log(' BookShelf componentDidMount');
        if(this.props.OnUpdateBookDatas){
           BooksAPI.getAll().then(books => {
            this.props.OnUpdateBookDatas(books);
            })
        }
      }

    filterBookDatas= () =>{
        
        let {CurrentlyReadingBooks,WantToReadBooks,ReadBooks} = []
        if(this.props.BookDatas && this.props.BookDatas.length > 0){

              CurrentlyReadingBooks = this.props.BookDatas.filter( book => book.shelf === 'currentlyReading');
              WantToReadBooks = this.props.BookDatas.filter( book => book.shelf === 'wantToRead');
              ReadBooks = this.props.BookDatas.filter( book => book.shelf === 'read');
            
        }
        
        return {CurrentlyReadingBooks,WantToReadBooks,ReadBooks}
        //console.debug(` CurrentlyReadingBooks:${CurrentlyReadingBooks.length} WantToReadBooks:${WantToReadBooks.length} ReadBooks:${ReadBooks.length}`);
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

