import React, { Component } from 'react'; 
import ListContacts from "./ListContacts";
import * as ContactsAPI from './utils/ContactsAPI'


class App extends Component {

  state = {
    contacts : []
  }

  //add the removeContact delegate func for the call back from child component..
  deleteContact = (contactToDelete) => {
    
    //currentState => holds current state
    this.setState ( (currentState) => ({ 
      // this will merge the state
      contacts : currentState.contacts.filter ( contact => contact.id !== contactToDelete.id),
    }));

    ContactsAPI.remove(contactToDelete);
  }

  componentDidMount (){
    ContactsAPI.getAll().then(contacts => {
      this.setState ({
        contacts : contacts
     })
     console.debug(contacts)
    });
  }

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} OnDeleteContact = {this.deleteContact} />
      </div>
    );
  }
}

export default App;
