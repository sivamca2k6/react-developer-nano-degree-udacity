import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser'
import UserList from './components/UserList'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
    userInfos : [
      {
          userName : 'userName',
          firstName : 'firstName',
          lastName : 'lastName',
          noOfGamePlayed:0
      }
    ]
  }

  addUser = (newUser) => {
    this.setState ( (currentState) => ({ 
      userInfos : [...currentState.userInfos,newUser]
      }));
  }

  render() {
    console.debug(this.state.userInfos[0])
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Adduser userInfos = {this.state.userInfos} addUser={this.addUser} />    
        <UserList userInfos = {this.state.userInfos}  />  
      </div>
    );
  }
}

export default App;
