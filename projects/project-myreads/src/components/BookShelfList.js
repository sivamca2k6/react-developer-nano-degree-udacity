import React,{Component} from 'react'
import BookShelf from './BookShelf'


/* to do - 
1.data as props
2.filter corresponding category
3.pass to respective compo
*/
class BookShelfList extends Component{

    state = {
        SearchBookDatas : []
      }
    
      componentDidMount(){
        BooksAPI.getAll().then(books => {
          console.debug(books)
          this.setState({SearchBookDatas : books})
        })
      }

    render(){ return (
        <div className="list-books-content">
            <BookShelf />
            <BookShelf />
            <BookShelf />
        </div>
    )}
}

export default BookShelfList

