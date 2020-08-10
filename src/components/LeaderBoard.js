import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {

  sortIt = (users)=> {
    let data = []
    for (let i = 0; i < Object.keys(users).length; i++) {
      data.push([
        users[i].name, 
        users[i].questions.length, 
        Object.keys(users[i].answers).length,
        users[i].questions.length + Object.keys(users[i].answers).length,
        users[i].avatarURL
      ])
    }
    return data.sort((a, b)=> { return b[3] - a[3] })
  }

  render() {
    return (
      <div className='ans-unans'>
        <ol>
          {this.sortIt(this.props.users).map((user, index)=> {
            return (
              <li key={ user[0]} className='question box'>
                <div className='hd box'>
                <p><b>{ index + 1 }{ (index + 1) === 1 ? 'st' : (index + 1) === 2 ? 'nd' : (index + 1) === 3 ? 'rd' : 'th' } place: { user[0] }</b></p>
                </div>
                <img className='avatar box' alt='avatar' src={ user[4] } width='100' height='100' />
                <div className='questxt box centered'>
                  <p>Created: { user[1] }</p>
                  <p>Answered: { user[2] }</p>
                  <p>Score: { user[3] }</p>
                </div>
              </li>
            )
          })}
        </ol>
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

export default connect(mapStateToProps)(LeaderBoard)