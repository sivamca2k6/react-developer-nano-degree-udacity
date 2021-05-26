import React,{Component} from 'react'
import BookShelf from './BookShelf'


class BookShelfList extends Component{

    constructor(props){
        super(props)
        this.state = {
            BookDatas: [],
          }
          //console.debug("BookShelfList - constructor " + this.props.BookDatas.length);
    }

    filterBookDatas= () =>{
        
        const  CurrentlyReadingBooks = this.props.BookDatas.filter( book => book.shelf === 'currentlyReading');
        const  WantToReadBooks = this.props.BookDatas.filter( book => book.shelf === 'wantToRead');
        const  ReadBooks = this.props.BookDatas.filter( book => book.shelf === 'read');
        
        return {CurrentlyReadingBooks,WantToReadBooks,ReadBooks}
    }
        
    render(){ 
        console.debug("BookShelfList - render " + this.props.BookDatas.length);
        const {CurrentlyReadingBooks,WantToReadBooks,ReadBooks} = this.filterBookDatas();

        return (
        <div className="list-books-content">
            <BookShelf BookDatas={CurrentlyReadingBooks} Title ={'Currently Reading'} />
            <BookShelf BookDatas={WantToReadBooks} Title ={'Want To Read'} />
            <BookShelf BookDatas={ReadBooks} Title ={'Read'} />
        </div>
    )}
}

export default BookShelfList

