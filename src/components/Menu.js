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
    const { user, authedUser } = this.props
    console.log(this.props)
    
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
        Hello, { authedUser } <img src='' alt='avatar' width='10' height='10' />
        <button onClick={(e) => this.logout(e)}>Logout</button>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser]
  return {
    authedUser,
    user
  }
}

export default connect(mapStateToProps)(Menu)