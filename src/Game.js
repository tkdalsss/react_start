import React from "react";
import Board from "./Board";
import "./style.css";

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      history:[
        {squares: Array(9).fill('null')}
      ],
      xIsNext: true
    }
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      retrun(
        <li>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>  
      );
    })

    let status;
    if(winner){
      status = "Winner: " + winner;
    }
    else{
      status = "Next Player: " + (this.state.xIsNext? "X": "O")
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick={(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}