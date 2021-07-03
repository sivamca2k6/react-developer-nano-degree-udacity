export const RECEIVE_DECK_LIST = 'RECEIVE_DECK_LIST'
export const ADD_DECK = 'ADD_DECK'
export const CLEAR_DECK = 'CLEAR_DECK'

export function receive_deck_list (deckList) {
  return {
    type: RECEIVE_DECK_LIST,
    deckList,
  }
}

export function add_deck (title) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function clear_deck () {
  return {
    type: CLEAR_DECK,
  }
}