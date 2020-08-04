import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers, handleGetQuestions } from '../actions/shared'
import LoginPage from './LoginPage'
import Questions from './Questions'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
    this.props.dispatch(handleGetQuestions())
  }
  render() {
    return (
      <div className="App">
        <LoginPage />
        <Questions />
        <LeaderBoard />
      </div>
    )
  }
}

export default connect()(App)
