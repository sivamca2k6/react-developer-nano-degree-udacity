import React, { Component } from 'react'; 
import ListContacts from "./ListContacts";


class App extends Component {

  state = {
    contacts : [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      { 
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
  }

  //add the removeContact delegate func for the call back from child component..
  deleteContact = (contactToDelete) => {
    
    //currentState => holds current state
    this.setState ( (currentState) => ({ 
      // this will merge the state
      contacts : currentState.contacts.filter ( contact => contact.id !== contactToDelete.id),
    }));

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
