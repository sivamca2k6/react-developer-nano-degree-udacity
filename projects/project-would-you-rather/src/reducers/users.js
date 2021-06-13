import { RECEIVE_USERS,SAVE_USER_POLLS_VOTE,SAVE_USER_POLL } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
      case SAVE_USER_POLLS_VOTE :
        const {qid,answer,authedUser} = action
         return {
           ...state,
           [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer
            }
          }
         }  
      case SAVE_USER_POLL :
          const {poll} = action
          return {
            ...state,
            ...state = {
              ...state,
              [poll.author]: {
                ...state[poll.author],
                questions: state[poll.author].questions.concat([poll.id])
              }
            }
          }
    default :
      return state
  }
}