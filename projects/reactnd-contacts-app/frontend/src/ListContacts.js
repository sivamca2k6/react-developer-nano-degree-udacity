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
        return (

        <div className="list-contacts">
            <div className = "list-contacts-top">
                <input type="text"  className="search-contact" placeholder="Search Contact" 
                    value = {this.state.searchtext} onChange = {(event) => {this.updateSearchQuery(event.target.value)}} // this is one way binding;value will be update thru setState only
                  />
            </div>
            {JSON.stringify(this.state)}
            <ol className="contact-list" >
                { this.props.contacts.map( x=> (  
                    <li key={ x.id} className="contact-list-item">  
                        <div className="contact-avator" style= {{ backgroundImage: `url(${x.avatarURL})`  }} />
                        <div className="contact-details">
                            <p> {x.name}</p>
                            <p> {x.handle}</p>
                        </div>
                        <button className="contact-remove" onClick = { () => this.props.OnDeleteContactTriggered(x)}> Remove </button>   
                    </li>
                ))};
            </ol> 
        </div>    
        )
    }
}



export default ListContacts;