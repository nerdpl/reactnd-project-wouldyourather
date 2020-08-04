import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Questions extends Component {
  render() {
    return (
      <div>
        QUESTIONS:
        {this.props.questionsIds.map((q)=> {
          return <Question id={q} />
        })}
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

export default connect(mapStateToProps)(Questions)