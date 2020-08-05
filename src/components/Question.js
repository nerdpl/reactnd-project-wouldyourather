import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  render() {
    const { question, users, authedUser } = this.props

    return (
      <Link to={ `/question/${ question.id }` } className='question'>
        { question.author } asks:
        <div>
          <img src={ users[authedUser].avatarURL } alt='avatar' width='100' height='100' />
          <p>Would you rather:</p>
          <div>{ this.props.answered === true && 'ANSWERED' }</div> 
          <p>A) { question.optionOne.text }</p>
          <p>B) { question.optionTwo.text }</p>
        </div>
      </Link>
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

export default withRouter(connect(mapStateToProps)(Question))