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

  sortIt = (questionsIds)=> {
    const filteredList = questionsIds.filter((q)=> { return this.checkQuestion(this.props.authedUser, this.props.questions[q]) })
    let data = []
    for (let i = 0; i < Object.keys(filteredList).length; i++) {
      data.push([
        this.props.questions[filteredList[i]].id,
        this.props.questions[filteredList[i]].timestamp
      ])
    }
    const sortedList = data.sort((a, b)=> { return b[1] - a[1] })
    return sortedList
  }

  render() {
    return (
      <div>
        <div>{ (this.props.answered === true) 
          ? <p className='centered'>Answered questions: </p> 
          : <p className='centered'>Unanswered questions:</p> }
          { this.sortIt(this.props.questionsIds)
            .map((q)=> { return <div key={ q[0] }><Question id={ q[0] } answered={ this.props.answered } /></div>
          })}
        </div>
      </div>
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