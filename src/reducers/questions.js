import { GET_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

export default function questions(state={}, action) {
  switch(action.type) {
    case GET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION :
      return {
        ...state,
      }
    case ADD_QUESTION :
      return {
        ...state,
      }
    default :
      return state
  }
}