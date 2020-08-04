import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginPage extends Component {
  render() {
    console.log('THIS.PROPS: ', this.props)
    return (
      <div>
        <h1>Please Log in:</h1>
        <form>
          <select name='User list'>
            {this.props.userIds.map((id)=> {
              return <option key={ id }>{ id }</option>
            })}
          </select>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(LoginPage)