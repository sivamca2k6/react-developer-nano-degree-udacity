export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_POLLS_VOTE = 'SAVE_POLLS_VOTE'
export const SAVE_POLL = 'SAVE_POLL'

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

export function savePoll ( poll  ) {
  //console.log(poll)
  return {
    type: SAVE_POLL,
    poll,
  }
}


