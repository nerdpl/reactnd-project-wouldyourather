import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginPage extends Component {
  login = (e)=> {
    e.preventDefault()
  } 

  render() {
    return (
      <div>
        <h1>Please Log in:</h1>
        <form onSubmit={ this.login }>
          <select name='User list' id='userList'>
            {this.props.users.map((user)=> {
              return <option value={ user.id } key={ user.id } >{ user.id }</option>
            })}
          </select>
          <button>Login</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    users: Object.values(users),
    authedUser
  }
}

export default connect(mapStateToProps)(LoginPage)