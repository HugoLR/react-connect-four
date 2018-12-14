import React, {Component} from "react";

import Circle from "./Circle"

class Cell extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cell"><Circle /></div>
        <div className="cell"><Circle /></div>
        <div className="cell"><Circle /></div>
        <div className="cell"><Circle /></div>
        <div className="cell"><Circle /></div>
        <div className="cell"><Circle /></div>
        <div className="cell"><Circle /></div>
      </React.Fragment>
    );
  }
}

export default Cell;
