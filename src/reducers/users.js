import { GET_USERS } from '../actions/users'
import { ANSWER_QUESTION } from '../actions/questions' 

export default function users(state={}, action) {
  switch(action.type) {
    case GET_USERS :
      return {
        ...state,
        ...action.users
      }
    case ANSWER_QUESTION:
      let thisUser = state[action.answer.authedUser]
      let updatedAnswers = { ...thisUser.answers, [action.answer.qid]: action.answer.answer }
      let updatedUser = { ...thisUser, updatedAnswers }
      return {
        ...state,
        updatedUser
      }
    default :
      return state
  }
}