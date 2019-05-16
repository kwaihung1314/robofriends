import React, { Component } from 'react'
import './hello.css';

class Hello extends Component {
  render() {
    return (
      <div className="tc">
        <h1 className="f1">Hello {this.props.name}</h1>
        <h2>Greeting to you!</h2>
        <h3>Welcome....</h3>
      </div>
    )
  }
}

export default Hello