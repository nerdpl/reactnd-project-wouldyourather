import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {
  handleSubmit = (e)=> {
    e.preventDefault()
    const optionOneText = document.getElementById('option1').value
    const optionTwoText = document.getElementById('option2').value
    const question = {
      author: this.props.authedUser,
      optionOneText,
      optionTwoText
    }
    handleAddQuestion(question)
  }

  render() {
    return (
      <div>
        <p>Would you rather:</p>
        <form onSubmit={ (e)=> this.handleSubmit(e) }>
          <input type='text' id='option1'></input>
          <p>OR</p>
          <input type='text' id='option2'></input>
          <p><button>Submit</button></p>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)