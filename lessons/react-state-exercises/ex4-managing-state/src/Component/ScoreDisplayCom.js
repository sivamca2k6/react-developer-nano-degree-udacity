import React from 'react';
import '../App.css';

export default function ScoreDisplayCom(props){
    return (
          <p className="text">
            Your Score: {props.numCorrect}/{props.numQuestions}
          </p>
    )
}