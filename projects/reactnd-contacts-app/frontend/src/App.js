import React, { Component } from 'react'; 
import {Route } from 'react-router-dom'
import ListContacts from "./components/ListContacts";
import AddContact from "./components/AddContact";
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
     //console.debug(contacts)
    });
  }

  render() {
    return (
      <div>
        <Route exact path='/' render = { () => (<ListContacts contacts={this.state.contacts} OnDeleteContact = {this.deleteContact}  /> ) }  />
        <Route exact path='/add' component= {AddContact} />     
      </div>
    );
  }
}

export default App;
