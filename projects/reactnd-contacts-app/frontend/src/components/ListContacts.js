// eslint-disable-next-line
import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
    
    static propTypes = {
        contacts : PropTypes.array.isRequired,
    }

    state = {
        searchtext : '',
    }

    updateSearchQuery = (searchText) => {
        console.log(` search text - ${searchText}`);
        this.setState ( () => ( {
            searchtext : searchText
        }));
    }

    render(){

        const { searchtext } = this.state
        const { contacts, OnDeleteContact } = this.props
    
        const filteredContacts = searchtext === ''
          ? contacts
          : contacts.filter((c) => (
              c.name.toLowerCase().includes(searchtext.toLowerCase())
            ))
         console.log (filteredContacts.length)  

        return (

            <div className="list-contacts">
                 <h1> Contact Lists</h1>
                <div className = "list-contacts-top">
                    <input type="text"  className="search-contact" placeholder="Search Contact" 
                        value = {this.state.searchtext} onChange = {(event) => {this.updateSearchQuery(event.target.value)}} // this is one way binding;value will be update thru setState only
                    />
                </div>

                <div className='showing-contacts'>
                    <span>
                        {JSON.stringify(this.state)} - showing {filteredContacts.length} of {contacts.length} 
                    </span>
                    <button onClick={ () => this.updateSearchQuery('') }>Reset Search</button>
                </div>

                <ol className="contact-list" >

                    { filteredContacts.map( x=> (  
                        <li key={ x.id} className="contact-list-item">  
                            <div className="contact-avator" style= {{ backgroundImage: `url(${x.avatarURL})`  }} />
                            <div className="contact-details">
                                <p> {x.name}</p>
                                <p> {x.handle}</p>
                            </div>
                            <button className="contact-remove" onClick = { () => OnDeleteContact(x)}> Remove </button>   
                        </li>
                    ))};
                </ol> 
            </div>    
        )
    }
}



export default ListContacts;