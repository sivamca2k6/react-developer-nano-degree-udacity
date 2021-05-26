import React from 'react'
import BooksGrid from './BooksGrid'


/* to do - 
1.get api data props
2.bind to grid
3.function compo

*/
export default function BooksShelf(props) {

    return (

    <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
           <BooksGrid />
        </div>
    </div>

    )
}


