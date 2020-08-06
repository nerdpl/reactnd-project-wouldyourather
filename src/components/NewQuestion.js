import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  handleSubmit = ()=> {

  }

  render() {
    return (
      <div>
        <p>Would you rather:</p>
        <form onSubmit={ this.handleSubmit() }>
          <input></input>
          <p>OR</p>
          <input></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)