import React from 'react'
import Book from './Book'

export default function BooksGrid(props) {
    
    const books = props.BookDatas || []
    return (
    books.length > 0 ? 
    <ol className="books-grid">
        {
            books.map( book => 
            <li key={book.id}>
                 <Book Book ={book}  />
            </li>
            )
        }
    </ol> : <p> no books avialable.</p> 
     )
    
}


