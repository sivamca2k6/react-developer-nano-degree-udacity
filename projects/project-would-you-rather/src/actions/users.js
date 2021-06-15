export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_POLLS_VOTE = 'SAVE_USER_POLLS_VOTE'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function saveUserPollVote ({ authedUser, qid, answer  }) {
  return {
    type: SAVE_USER_POLLS_VOTE,
    qid,
    authedUser,
    answer
  }
} 