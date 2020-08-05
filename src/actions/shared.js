import { _getUsers, _getQuestions } from '../utils/_DATA'
import { getUsers } from './users'
import { getQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleGetUsers() {
  return (dispatch)=> {
    dispatch(showLoading())
    return _getUsers()
      .then((users)=> {
        dispatch(getUsers(users))
        dispatch(hideLoading())
      })
  }
}

export function handleGetQuestions() {
  return (dispatch)=> {
    dispatch(showLoading())
    return _getQuestions()
      .then((questions)=> {
        dispatch(getQuestions(questions))
        dispatch(hideLoading())
      })
  }
}