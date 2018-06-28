import React from 'react'

export default class App extends React.Component {
  render() {
    return <div>
    <span>{this.props.fuga}</span>
    <button onClick={ () => this.props.onClickPlus() }>増加</button>
    <button onClick={ () => this.props.onClickMinus() }>減少</button>
  </div>
  }
}
