import React,{Component} from 'react'
import Book from './Book'

class BooksGrid extends Component{

    render(){ return (

    <ol className="books-grid">
        <li>
           <Book />
        </li>
        <li>
            <Book />
        </li>
    </ol>

    )}
}

export default BooksGrid


