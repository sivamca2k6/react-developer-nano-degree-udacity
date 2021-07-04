import { RECEIVE_DECK_LIST, ADD_DECK,CLEAR_DECK,ADD_CARD_TO_DECK,CLEAR_QUIZ_SCORE,SAVE_QUIZ_SCORE } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECK_LIST :
      return {
        ...state,
        ...action.deckList,
      }
    case CLEAR_DECK :
      return state = {}
    case ADD_DECK :
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
          score : 0
        }
      }
    case ADD_CARD_TO_DECK:
        return {
          ...state,
          [action.title]: {
            ...state[action.title],
            questions: state[action.title].questions.concat(action.card)
          }
        }
    case CLEAR_QUIZ_SCORE:
          return {
            ...state,
            [action.title]: {
              ...state[action.title],
              score:0
            }
          }
    case SAVE_QUIZ_SCORE:
            return {
              ...state,
              [action.title]: {
                ...state[action.title],
                score: action.score
              }
            }
    default :
      return state
  }
}

export default entries