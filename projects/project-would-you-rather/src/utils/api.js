import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from './_DATA.js'

export function apiGetInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, polls]) => ({
    users,
    polls,
  }))
}

export function savePollsVote (info) {
  return _saveQuestionAnswer(info)
}

export function savePolls (info) {
  //console.log(info)
  return _saveQuestion(info)
}