import React,{Component} from 'react'
import BookShelf from './BookShelf'


class BookShelfList extends Component{

    render(){ return (
        <div className="list-books-content">
            <BookShelf />
            <BookShelf />
            <BookShelf />
        </div>
    )}
}

export default BookShelfList

