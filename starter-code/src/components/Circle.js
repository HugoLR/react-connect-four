import React, { Component }  from 'react';

class Circle extends Component {
  constructor(){
    super();

    this.state = {
      color: true
    }
  }


  changeColor = () => {
    this.setState({
      color: !this.state.color
    })
  }

  render() {
    return (
      <div className= { (this.state.color) ? 'circle' : 'circle yellow' } onClick={this.changeColor}>
      </div>
    );
  }
}

export default Circle;
