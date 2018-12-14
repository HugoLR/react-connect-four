import React, {Component} from "react";

import Row from "./Row"

class Board extends Component {
  constructor(){
    super()

    this.state = {
      player : 1,
      player: 2
    }
    
  }
  render() {
    return(
      <div className="board-container">
        <Row />
      </div>
    );
  }
}

export default Board;
