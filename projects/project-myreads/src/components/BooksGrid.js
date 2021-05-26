import React from 'react'
import Book from './Book'

/* to do - 
1.get api data props
2.function compo
3.map data
*/
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


