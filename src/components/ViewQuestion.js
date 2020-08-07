import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class ViewQuestion extends Component {
  render() {
    const { users, authedUser, questions } = this.props
    const id = this.props.match.params.id
    const answered = !!users[authedUser].answers[id]
    const question = questions[id]

    return (
      <div>
        { question.author } asks:
        <div>
          <img src={ users[authedUser].avatarURL } alt='avatar' width='100' height='100' />
          <p>Would you rather:</p>
          { (answered === true) 
            ? (<div>
              <p>{ question.optionOne.text }{ question.optionOne.votes.some((vote)=> vote === authedUser) === true && ' (your vote)' }</p>
              <p>{ question.optionOne.votes.length * 100 / (question.optionOne.votes.length + question.optionTwo.votes.length) } %
                ({ question.optionOne.votes.length } vote{ (question.optionOne.votes.length > 1 || question.optionOne.votes.length === 0) && 's' } out of { question.optionOne.votes.length + question.optionTwo.votes.length })</p>
              <p>{ question.optionTwo.text }{ question.optionTwo.votes.some((vote)=> vote === authedUser) === true && ' (your vote)' }</p>
              <p>{ question.optionTwo.votes.length * 100 / (question.optionOne.votes.length + question.optionTwo.votes.length) } %
                ({ question.optionTwo.votes.length } vote{ (question.optionTwo.votes.length > 1 || question.optionTwo.votes.length === 0) && 's' } out of { question.optionOne.votes.length + question.optionTwo.votes.length })</p>
            </div>)
            : (<div>
              <p>{ question.optionOne.text }</p>
              <p>OR</p>
              <p>{ question.optionTwo.text }</p>    
            </div>)
          } 
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(ViewQuestion)