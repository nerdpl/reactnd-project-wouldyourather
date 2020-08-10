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
  console.log(answer)
  return (dispatch)=> {
    return _saveQuestionAnswer (answer)
      .then(()=> {
        dispatch(answerQuestion(answer))
      })
      .catch(()=> alert('Error. Please try again.'))
  }
}

export function handleAddQuestion(question) {
  return (dispatch)=> {
    return _saveQuestion(question)
      .then((question)=> {
        dispatch(addQuestion(question))
      })
      .catch(()=> alert('Error. Please try again.'))
  }
}