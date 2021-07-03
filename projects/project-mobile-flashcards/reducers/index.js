import { RECEIVE_DECK_LIST, ADD_DECK,CLEAR_DECK,ADD_CARD_TO_DECK } from '../actions'

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
          isAnswerCorrect: false
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
    default :
      return state
  }
}

export default entries