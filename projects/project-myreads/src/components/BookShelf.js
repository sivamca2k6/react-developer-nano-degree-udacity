import React from 'react'
import BooksGrid from './BooksGrid'

export default function BooksShelf(props) {

    return (

    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.Title}</h2>
        <div className="bookshelf-books">
           <BooksGrid BookDatas={props.BookDatas} />
        </div>
    </div>

    )
}


