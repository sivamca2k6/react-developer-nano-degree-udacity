import React from 'react'
import BooksGrid from './BooksGrid'

export default function BooksShelf(props) {

    return (

    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.Title} ({props.BookDatas ? props.BookDatas.length : 0})</h2>
        <div className="bookshelf-books">
           <BooksGrid BookDatas={props.BookDatas} OnChangeShelf ={props.OnChangeShelf} />
        </div>
    </div>

    )
}


