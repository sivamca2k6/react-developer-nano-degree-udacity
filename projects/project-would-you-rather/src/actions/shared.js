import { apiGetInitialData,savePollsVote,savePolls } from '../utils/api'
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import {savePollVote,savePoll} from './polls'
import {saveUserPollVote} from './users'

export function handleInitialData () {
 
  return (dispatch, getState) => {
    const { authedUser } = getState()
    
    dispatch(showLoading())

    return apiGetInitialData()
      .then(({ users, polls }) => {
        dispatch(receiveUsers(users))
        dispatch(receivePolls(polls))
        dispatch(setAuthedUser(authedUser))
        dispatch(hideLoading())
      })
  }
}

export function handleSavePollVote (info) {
  return (dispatch) => {

    dispatch(savePollVote(info))
    dispatch(saveUserPollVote(info))

    return savePollsVote(info)
      .catch((e) => {
        
        console.warn('Error in handleSavePollVote: ', e)

        dispatch(savePollVote(info))
        //dispatch(saveUserPollVote(info))

        alert('There was an error in voting. Try again.')
      })
  }
}


export function handleAddPoll (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    const poll = {
      author : authedUser,
      optionOneText,
      optionTwoText
    }
    //console.log(poll)

    dispatch(showLoading())

    return savePolls(poll)
      .then((poll) => {
        dispatch(savePoll(poll))
        //dispatch(saveUserPoll(poll))
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleSavePollVote: ', e)
      })
  }
}
