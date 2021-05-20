import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameMainCom from './Component/Game';
import ScoreDisplayCom from './Component/ScoreDisplayCom';


//why const not able to use inside class compo --- please check it out
var {value1,value2,value3,proposedAnswer} = 0;

class App extends Component {

  state = {
    numQuestions : 0,
    numCorrect : 0,
  }
  
  constructor(props) {
    super(props);
    this.createNewNumbers();
  }
  
  IsAnswerCorrect = () => value1 + value2 + value3 === proposedAnswer;

  onupdatescore = (Answer) => {
      console.log(this.IsAnswerCorrect() === Answer);
      this.createNewNumbers();
      this.setState ( (currentState) => ({ 
        numQuestions : currentState.numQuestions + 1,
        numCorrect   : this.IsAnswerCorrect() === Answer ? currentState.numCorrect + 1 :  currentState.numCorrect,
      }));
  }

  createNewNumbers = () => {
     value1 = Math.floor(Math.random() * 100);
     value2 = Math.floor(Math.random() * 100);
     value3 = Math.floor(Math.random() * 100);
     proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
  }
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice - {helloWorld} </h1>
        </header>
        <GameMainCom value1={value1} value2={value2} value3={value3} proposedAnswer={proposedAnswer} onupdatescore ={this.onupdatescore} />
        <ScoreDisplayCom numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} />
      </div>
    );
  }
}

export default App;
