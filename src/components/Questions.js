import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Questions extends Component {
  render() {
    return (
      <div>
        QUESTIONS:
        <ul>
          {this.props.questionsIds.map((q)=> {
            return (
              <li key={ q }>
                <Question id={q} />
              </li>
            )
          })}
        </ul>
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