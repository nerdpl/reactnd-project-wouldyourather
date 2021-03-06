import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers, handleGetQuestions } from '../actions/shared'
import LoginPage from './LoginPage'
import ViewQuestion from './ViewQuestion'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import Menu from './Menu'
import NewQuestion from './NewQuestion'
import { setAuthedUser } from '../actions/authedUser'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter, Route, Switch } from 'react-router-dom' 
import NoMatch from './NoMatch'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
    this.props.dispatch(handleGetQuestions())
    this.props.dispatch(setAuthedUser(''))
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          { (this.props.authedUser !== '' && this.props.authedUser !== null)
            ? ( <div>
              <LoadingBar />
              <Menu />
              <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/login' exact component={ LoginPage } />
                <Route path='/new' exact component={ NewQuestion } />
                <Route path='/question/:id' component={ ViewQuestion } />
                <Route path='/leaderboard' exact component={ LeaderBoard } />
                <Route path='/404' exact component={ NoMatch } />
                <Route component={ NoMatch } />
              </Switch></div>)
            : <div><Menu /><LoginPage /></div> }
        </Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
