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
      <div className='question box'>
        <div className='hd box'>{ users[question.author].name } asks:</div>
        <div className='avatar box'><img src={ users[question.author].avatarURL } alt='avatar' width='100' height='100' /></div>
        <div className='questxt box'>
          <p className='bold'>Would you rather:</p>
          <p className='centered'>{ question.optionOne.text }</p>
          <p className='centered'>OR</p>
          <p className='centered'>{ question.optionTwo.text }</p>    
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