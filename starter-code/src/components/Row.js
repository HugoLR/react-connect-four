import React, {Component} from "react" ;

import Cell from "./Cell"

class Row extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row"><Cell /></div>
        <div className="row"><Cell /></div>
        <div className="row"><Cell /></div>
        <div className="row"><Cell /></div>
        <div className="row"><Cell /></div>
        <div className="row"><Cell /></div>
      </React.Fragment>
    );
  }
}

export default Row;
