import { GET_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

export default function questions(state={}, action) {
  switch(action.type) {
    case GET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION :
      let updatedQuestion = state[action.answer.qid]
      updatedQuestion[action.answer.answer].votes.push(action.answer.authedUser)
      return {
        ...state,
        [action.answer.qid]: updatedQuestion 
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    default :
      return state
  }
}