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
          //users[action.authedUser].answers: { ...state.users[action.authedUser].answers, { action.qid: action.answer } }
      }
    case ADD_QUESTION :
      return {
        ...state,
        //questions: { ...state.questions, action.question }
      }
    default :
      return state
  }
}