
export const DECKLIST_STORAGE_KEY = '@DeckList'

function getRandomNumber (max) {
    return Math.floor(Math.random() * max) + 0
  }

  export function formatDeckListResults (results) {
    return results === null
      ? getDummyData()
      : JSON.parse(results)
  }

const getDummyData = () => {
  var DummyData = {
    "React": {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
          isCorrect : true,
          result : false,
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
          isCorrect : true,
          result : false,
        },

      ]
    },
    "JavaScript": {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.',
          isCorrect : true,
          result : false,
        },
        {
          question: 'Has Javascript version 25.000?',
          answer: 'Yes',
          isCorrect : false,
          result : false,
        },
      ]
    }
  }
  return DummyData;
}