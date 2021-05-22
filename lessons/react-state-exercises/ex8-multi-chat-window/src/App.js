import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/ChatWindow'

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {

  state = {
   messages : [],
  }

  appendMessage = (message) => {
    console.log(message);

    this.setState( (currentState) => ( {
      messages :[...currentState.messages,message]
    }));
    
  };

  render(){ return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <body>
        <div className="container">
            <ChatWindow key={users[0].username} username ={users[0].username} messages = {this.state.messages} sendMessage={this.appendMessage}  />
            <ChatWindow key={users[1].username} username ={users[1].username} messages = {this.state.messages} sendMessage={this.appendMessage} />
        </div>
      </body>
     </div>
  )}
} 

export default App;
