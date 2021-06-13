//import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_POLLS_VOTE = 'SAVE_POLLS_VOTE'
//export const SAVE_POLLS = 'SAVE_POLLS'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

export function savePollVote ({ authedUser, qid, answer  }) {
  return {
    type: SAVE_POLLS_VOTE,
    qid,
    authedUser,
    answer
  }
} 

// function savePoll ({ question  }) {
//   return {
//     type: SAVE_POLLS,
//     question,
//   }
// }

