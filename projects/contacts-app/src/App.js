import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

//create component for display list
class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return (
      <ol>
        {
          people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>)
  }
}

class App extends Component {
  render() {

    return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                 React App
                </p>
              </header>
              
                <ContactList contacts = { [ {name : "Siva"},{name : "bharathi"} ]} />
                <ContactList contacts = { [ {name : "Siva"},{name : "bharathi"} ]} />
              
            </div>
          )
  }
}

//make avialable at outside world to reuse
export default App;

