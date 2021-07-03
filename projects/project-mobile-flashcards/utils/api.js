import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatDeckListResults, DECKLIST_STORAGE_KEY } from './_decks'

export function getDecksApi () {
  return AsyncStorage.getItem(DECKLIST_STORAGE_KEY)
    .then(formatDeckListResults)
}

export function addDeckApi(title){
  const newDeck = {
    title: title,
    questions: [],
    isCorrect: false
  }
  return AsyncStorage.mergeItem(DECKLIST_STORAGE_KEY, JSON.stringify({
    [title]: newDeck,
  }))
}

export function clearDecksApi () {
  return AsyncStorage.clear();
}
