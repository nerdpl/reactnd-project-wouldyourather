import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from './Questions'

class Home extends Component {
  state = {
    answered: false
  }

  toggleTab = (e)=> {
    e.preventDefault()
    this.setState((curr)=> ({ answered: !curr.answered }))
  }

  render() {
    return (
      <div>
        QUESTIONS:
        <button type='button' disabled={ !this.state.answered } onClick={ this.toggleTab }>
          UNANSWERED QUESTION
        </button>
        <button type='button' disabled={ this.state.answered } onClick={ this.toggleTab }>
          ANSWERED QUESTIONS
        </button>
        {this.state.answered === true && <Questions answered={ true } />}
        {this.state.answered === false && <Questions answered={ false } />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questionsIds: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(Home)