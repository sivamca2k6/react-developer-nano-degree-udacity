import React from 'react';
import '../App.css';

export default function GameMainCom(props){

    return (
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${props.value1} + ${props.value2} + ${props.value3} = ${props.proposedAnswer}`}</p>
          </div>
          <button onClick= { () => props.onupdatescore(true) }>True</button>
          <button onClick= { () => props.onupdatescore(false) }>False</button>
        </div>
    )
}