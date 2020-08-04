import { _getUsers, _getQuestions } from '../utils/_DATA'
import { getUsers } from './users'
import { getQuestions } from './questions'
import { setAuthedUser } from './authedUser'

const AUTHED_USER = 'sarahedo'

export function handleGetUsers() {
  return (dispatch)=> {
    return _getUsers()
      .then((users)=> {
        dispatch(getUsers(users))
        dispatch(setAuthedUser(AUTHED_USER))
      })
  }
}

export function handleGetQuestions() {
  return (dispatch)=> {
    return _getQuestions()
      .then((questions)=> {
        dispatch(getQuestions(questions))
      })
  }
}