// eslint-disable-next-line
import React , {Component} from 'react'

//create list of contacts for display
class ListContacts extends Component{
    render(){
        const contacts = this.props.contacts;
        return (
               <ol className="contact-list" >
                   { contacts.map( x=> (  
                        <li key={ x.id} className="contact-list-item">  

                            <div className="contact-avator" style= {{ backgroundImage: `url(${x.avatarURL})`  }} />

                            <div className="contact-details">
                                <p> {x.name}</p>
                                <p> {x.handle}</p>
                            </div>

                             <button className="contact-remove"> Remove </button>   
                            
                        </li>
                   ))};
               </ol> 
        );
    }
} 

export default ListContacts;