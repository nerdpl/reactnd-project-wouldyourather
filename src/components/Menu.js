import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Menu extends Component {
  logout = (e)=> {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(''))
  } 

  render() {
    const { user } = this.props
    
    return (
      <nav className='menu'>
        <NavLink to='/' exact activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/new' exact activeClassName='active'>
          New Question
        </NavLink>
        <NavLink to='/leaderboard' exact activeClassName='active'>
          LeaderBoard
        </NavLink>
        <div>Hello, { user.name } <img src={ user.avatarURL } alt='avatar' width='20' height='20' /></div>
        <button onClick={(e) => this.logout(e)}>Logout</button>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser]
  return {
    user
  }
}

export default connect(mapStateToProps)(Menu)