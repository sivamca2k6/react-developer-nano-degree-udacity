import { RECEIVE_POLLS,SAVE_POLLS_VOTE,SAVE_POLL} from '../actions/polls'

export default function polls (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls
      }
    case SAVE_POLLS_VOTE :
       const {qid,answer,authedUser} = action

        return {
          ...state,
          [qid]: {
            ...state[qid],
            [answer]: {
              ...state[qid][answer],
              votes: state[qid][answer].votes.concat([authedUser])
            }
          }
        }  
    case SAVE_POLL :
      const {poll} = action
      console.log(poll)
      return {
        ...state,
        ...state = {
          ...state,
          [poll.id]: poll
        }
      }
    default :
      return state
  }
}

