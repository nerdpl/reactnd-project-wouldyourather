import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Questions extends Component {

  checkQuestion = (authedUser, question)=> {
    let a1 = question.optionOne.votes.some(vote => vote === authedUser)
    let a2 = question.optionTwo.votes.some(vote => vote === authedUser)
    if ((this.props.answered === true) && (a1 || a2)) return true
    if (this.props.answered === false && a1 === false && a2 === false) return true
    return false
  }

  render() {
    return (
      <ul>{ (this.props.answered === true) ? 'Your answered questions: ' : 'Unanswered questions: ' }
        { this.props.questionsIds
          .filter((q)=> { return this.checkQuestion(this.props.authedUser, this.props.questions[q]) })
          .map((q)=> { return <li key={ q }><Question id={ q } answered={ this.props.answered } /></li>
        })}
      </ul>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  const questionsIds = Object.keys(questions)
  return {
    authedUser,
    questions,
    questionsIds
  }
}

export default connect(mapStateToProps)(Questions)