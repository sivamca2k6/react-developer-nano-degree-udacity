// eslint-disable-next-line
import React from 'react'

//function component
function ListContacts(props){
    const contacts = props.contacts;
    return (
        <ol className="contact-list" >
            { contacts.map( x=> (  
                <li key={ x.id} className="contact-list-item">  
                    <div className="contact-avator" style= {{ backgroundImage: `url(${x.avatarURL})`  }} />
                    <div className="contact-details">
                        <p> {x.name}</p>
                        <p> {x.handle}</p>
                    </div>
                    <button className="contact-remove" onClick = { () => props.OnDeleteContactTriggered(x)}> Remove </button>   
                </li>
            ))};
        </ol> 
    );
}

export default ListContacts;