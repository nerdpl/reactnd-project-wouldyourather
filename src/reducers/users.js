import { GET_USERS } from '../actions/users'
import { ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions' 

export default function users(state={}, action) {
  switch(action.type) {
    case GET_USERS :
      return {
        ...state,
        ...action.users
      }
    case ANSWER_QUESTION:
      let updatedUser = state[action.answer.authedUser]
      let updatedAnswers = { ...updatedUser.answers, [action.answer.qid]: action.answer.answer }
      updatedUser.answers = { ...updatedAnswers }
      return {
        ...state,
        [action.answer.authedUser]: updatedUser
      }
    case ADD_QUESTION:
      let updatedUser2 = state[action.question.author]
      updatedUser2.questions.push(action.question.id)
      return {
        ...state,
        [action.question.author]: updatedUser2
      }
    default :
      return state
  }
}