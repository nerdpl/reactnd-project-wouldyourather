import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LoginPage extends Component {
  login = (e)=> {
    e.preventDefault()
    const selectedUser = document.getElementById('userList').selectedIndex
    this.props.dispatch(setAuthedUser(this.props.users[selectedUser].id))
  } 

  render() {
    return (
      <div className='centered'>
        <h2>Welcome to</h2>
        <h1 className='bold animate'>WOULD YOU RATHER APP!</h1>
        <h3>Please log in:</h3>
        <form onSubmit={ this.login }>
          <select id='userList' name='User list'>
            {this.props.users.map((user)=> {
              return <option value={ user.id } key={ user.id } >{ user.id }</option>
            })}
          </select>
          <button onClick={(e) => this.login(e)}>Login</button>
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