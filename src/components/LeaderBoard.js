import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {

  sortIt = (users)=> {
    let data = []
    for (let i = 0; i < Object.keys(users).length; i++) {
      data.push([
        users[i].id, 
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
      <div>
        <ol>
          {this.sortIt(this.props.users).map((user)=> {
            return (
              <li key={ user[0] }>
                <img alt='avatar' src={ user[4] } width='100' height='100' />
                <p><b>User: { user[0] }</b></p>
                <p>Created: { user[1] }</p>
                <p>Answered: { user[2] }</p>
                <p>Score: { user[3] }</p>
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