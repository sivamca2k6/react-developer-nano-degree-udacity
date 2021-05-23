import React, { Component } from 'react'; 
import ListContacts from "./components/ListContacts";
import AddContact from "./components/AddContact";
import * as ContactsAPI from './utils/ContactsAPI'


class App extends Component {

  state = {
    contacts : [],
    screen : 'list'
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

  onNavigate = () =>{
    console.log('add')
    this.setState({ screen : 'add' })
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
       {this.state.screen === 'list' && (
            <ListContacts contacts={this.state.contacts} OnDeleteContact = {this.deleteContact} onNavigate ={this.onNavigate} />
       )} 
        
       {this.state.screen === 'add' && (
          <AddContact />
       )}
        
      </div>
    );
  }
}

export default App;
