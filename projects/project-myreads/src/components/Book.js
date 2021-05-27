import React from 'react';

class Book extends React.Component{

    state = {
        currentShelf : 'none'
    }

    OnShelfChange = (event) => {
            //console.log(`${this.props.Book.title} ${this.props.Book.shelf} Shelf Change to ${event.target.value}  `)
            
            this.setState({ currentShelf : event.target.value });
            this.props.OnChangeShelf(this.props.Book,event.target.value);
    }

    componentDidMount(){
            this.setState({ currentShelf : this.props.Book.shelf });
    }

    render() { 
        
        const imagePath = this.props.Book.imageLinks === undefined ? '' : this.props.Book.imageLinks.thumbnail;

        if(typeof this.props.Book.imageLinks === 'undefined') 
            console.debug(this.props.Book.title  + ' - imageLinks is `undefined`');

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ imagePath }")` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.OnShelfChange} value={this.state.currentShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.Book.title}</div>
                <div className="book-authors">{this.props.Book.authors}</div>
            </div>
    )}
}

export default Book