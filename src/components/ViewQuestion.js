import React, { Component } from 'react'
import { connect } from 'react-redux'

class ViewQuestion extends Component {
  render() {
    const { question, users, authedUser } = this.props
    console.log(this.props)

    return (
      <div>
        { question.author } asks:
        <div>
          <img src={ users[authedUser].avatarURL } alt='avatar' width='100' height='100' />
          <p>Would you rather:</p>
          { (this.props.answered === true) 
            ? (<div>
              <p>{ question.optionOne.text }{ question.optionOne.votes.some((vote)=> vote === authedUser) === true && ' (your vote)' }</p>
              <p>{ question.optionOne.votes.length * 100 / (question.optionOne.votes.length + question.optionTwo.votes.length) } %
                ({ question.optionOne.votes.length } vote{ question.optionOne.votes.length > 1 && 's' })</p>
              <p>{ question.optionTwo.text }{ question.optionTwo.votes.some((vote)=> vote === authedUser) === true && ' (your vote)' }</p>
              <p>{ question.optionTwo.votes.length * 100 / (question.optionOne.votes.length + question.optionTwo.votes.length) } %
                ({ question.optionTwo.votes.length } vote{ question.optionTwo.votes.length > 1 && 's' })</p>
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

function mapStateToProps({ authedUser, questions, users }, { id, answered }) {
  const question = questions[id]

  return {
    authedUser,
    question,
    users,
    answered
  }
}

export default connect(mapStateToProps)(ViewQuestion)