import React from 'react'
import {connect} from 'react-redux'

import App from '../component/app'
import {increment, decrement} from '../action/app'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    onClickPlus: () => { dispatch(increment()) },
    onClickMinus: () => { dispatch(decrement()) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
