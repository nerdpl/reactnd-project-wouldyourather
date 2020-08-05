import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
  render() {
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
        Hello, { this.props.authedUser }
        Logout
      </nav>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Menu)