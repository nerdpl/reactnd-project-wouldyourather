import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'
import NoMatch from './NoMatch'

class ViewQuestion extends Component {

  handleAnswer = (e, qid)=> {
    e.preventDefault()
    const option1 = document.getElementById('option1').checked
    const option2 = document.getElementById('option2').checked
    let selectedOpt = null
    option1 ? selectedOpt = 'optionOne' : (option2 ? selectedOpt = 'optionTwo' : selectedOpt = null)
    const answer = { 
      authedUser: this.props.authedUser, 
      qid, 
      answer: selectedOpt }
    this.props.dispatch(handleAnswerQuestion(answer))
  }

  render() {
    const { users, authedUser, questions } = this.props
    const id = this.props.match.params.id
    const answered = !!users[authedUser].answers[id]
    const question = questions[id]

    if (!question) { 
      return <NoMatch />
    }
    else {
      return (
        <div className='q-list'>
          <div className='question box'>
            <div className='hd box'>{ users[question.author].name } asks:</div>
            <div className='avatar box'>
              <img src={ users[question.author].avatarURL } alt='avatar' width='100' height='100' />
            </div>
            <div className='questxt box'>
              <p className='bold'>Would you rather:</p>
              { (answered === true) 
                ? (<div className='centered'>
                  <p>{ question.optionOne.text }{ question.optionOne.votes.some((vote)=> vote === authedUser) === true && ' (your vote)' }</p>
                  <p>{ (question.optionOne.votes.length * 100 / (question.optionOne.votes.length + question.optionTwo.votes.length)).toFixed(2) } %
                    ({ question.optionOne.votes.length } vote{ (question.optionOne.votes.length > 1 || question.optionOne.votes.length === 0) && 's' } out of { question.optionOne.votes.length + question.optionTwo.votes.length })</p>
                  <p>OR</p>
                  <p>{ question.optionTwo.text }{ question.optionTwo.votes.some((vote)=> vote === authedUser) === true && ' (your vote)' }</p>
                  <p>{ (question.optionTwo.votes.length * 100 / (question.optionOne.votes.length + question.optionTwo.votes.length)).toFixed(2) } %
                    ({ question.optionTwo.votes.length } vote{ (question.optionTwo.votes.length > 1 || question.optionTwo.votes.length === 0) && 's' } out of { question.optionOne.votes.length + question.optionTwo.votes.length })</p>
                </div>)
                : (<div>
                  <form onSubmit={ (e)=> this.handleAnswer(e, id) }>
                    <label><input id='option1' type='radio' name='question' />{ question.optionOne.text }</label>
                    <p className='centered'>OR</p>
                    <label><input id='option2' type='radio' name='question' />{ question.optionTwo.text }</label>
                    <p><button>Submit answer</button></p>
                  </form>
                </div>)
              } 
            </div>
          </div>
        </div>
      )
    }
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