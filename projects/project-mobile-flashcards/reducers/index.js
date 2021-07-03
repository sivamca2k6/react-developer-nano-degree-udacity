import { RECEIVE_DECK_LIST, ADD_DECK,CLEAR_DECK } from '../actions'

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
          isCorrect: false
        }
      }
    default :
      return state
  }
}

export default entries