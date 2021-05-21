import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/shopping-list-root'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <ShoppingList />
      </div>
    );
  }
}

export default App;
