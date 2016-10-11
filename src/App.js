import React, { Component } from 'react'
import './styles/main.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}
