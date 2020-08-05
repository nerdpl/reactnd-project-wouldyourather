import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers, handleGetQuestions } from '../actions/shared'
import LoginPage from './LoginPage'
import Question from './Question'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import Menu from './Menu'
import NewQuestion from './NewQuestion'
import { setAuthedUser } from '../actions/authedUser'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
    this.props.dispatch(handleGetQuestions())
    this.props.dispatch(setAuthedUser('sarahedo'))
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">  
            <Menu />
            <Route path='/' exact component={ Home } />
            <Route path='/login' exact component={ LoginPage } />
            <Route path='/new' exact component={ NewQuestion } />
            <Route path='/question/:id' component={ Question } />
            <Route path='/leaderboard' exact component={ LeaderBoard } />
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
