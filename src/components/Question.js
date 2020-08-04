import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    return (
      <div className='question'>
        {this.props.question.author} asks:
        <div>
          <img src={this.props.users[this.props.authedUser].avatarURL} alt='avatar' width='100' height='100' />
          <p>Would you rather:</p> 
          <p>A) {this.props.question.optionOne.text}</p>
          <p>B) {this.props.question.optionTwo.text}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id]
  return {
    authedUser,
    question,
    users
  }
}

export default connect(mapStateToProps)(Question)