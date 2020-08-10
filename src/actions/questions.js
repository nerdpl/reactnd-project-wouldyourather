export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function answerQuestion(answer) {
  console.log(answer)
  return {
    type: ANSWER_QUESTION,
    answer
  }
}

export function addQuestion(question) {
  console.log(question)
  return {
    type: ADD_QUESTION,
    question
  }
}