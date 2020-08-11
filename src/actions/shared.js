import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { getUsers } from './users'
import { getQuestions, answerQuestion, addQuestion } from './questions'
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

export function handleAnswerQuestion(answer) {
  return (dispatch)=> {
    dispatch(showLoading())
    return _saveQuestionAnswer (answer)
      .then(()=> {
        dispatch(answerQuestion(answer))
        dispatch(hideLoading())
      })
      .catch(()=> alert('Error. Please try again.'))
  }
}

export function handleAddQuestion(question) {
  return (dispatch)=> {
    dispatch(showLoading())
    return _saveQuestion(question)
      .then((question)=> {
        dispatch(addQuestion(question))
        dispatch(hideLoading())
      })
      .catch(()=> alert('Error. Please try again.'))
  }
}