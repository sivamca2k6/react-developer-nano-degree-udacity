export const RECEIVE_DECK_LIST = 'RECEIVE_DECK_LIST'
export const ADD_DECK = 'ADD_DECK'
export const CLEAR_DECK = 'CLEAR_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const CLEAR_QUIZ_SCORE = 'CLEAR_QUIZ_SCORE'
export const SAVE_QUIZ_SCORE = 'SAVE_QUIZ_SCORE'

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

export function add_Card_To_Deck (title, card) {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card,
  }
}

export function clear_quiz_score (title) {
  return {
    type: CLEAR_QUIZ_SCORE,
    title,
  }
}

export function save_quiz_score (title, score) {
  return {
    type: SAVE_QUIZ_SCORE,
    title,
    score,
  }
}