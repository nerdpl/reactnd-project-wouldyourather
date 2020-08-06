import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Question extends Component {
  viewQuestion = (e, id)=> {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }

  render() {
    const { question, users } = this.props

    return (
      <div>
        { question.author } asks:
        <div>
          <img src={ users[question.author].avatarURL } alt='avatar' width='100' height='100' />
          <p>Would you rather:</p>
          <p>{ question.optionOne.text }</p>
          <p>OR</p>
          <p>{ question.optionTwo.text }</p>    
          { (this.props.answered === true) 
            ? (<button onClick={(e) => this.viewQuestion(e, question.id)}>View results</button>)
            : (<button onClick={(e) => this.viewQuestion(e, question.id)}>Answer</button>)
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

export default withRouter(connect(mapStateToProps)(Question))