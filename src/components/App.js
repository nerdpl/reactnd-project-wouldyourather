import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers, handleGetQuestions } from '../actions/shared'
import LoginPage from './LoginPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
    this.props.dispatch(handleGetQuestions())
  }
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    )
  }
}

export default connect()(App)
