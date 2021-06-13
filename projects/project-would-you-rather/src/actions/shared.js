import { apiGetInitialData,savePollsVote } from '../utils/api'
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import {savePollVote} from './polls'
import {saveUserPollVote} from './users'

const AUTHED_ID = 'tylermcginnis' // todo : set at login id

export function handleInitialData () {
 
  return (dispatch) => {
    
    dispatch(showLoading())

    return apiGetInitialData()
      .then(({ users, polls }) => {
        dispatch(receiveUsers(users))
        dispatch(receivePolls(polls))
        dispatch(setAuthedUser(AUTHED_ID))
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
        dispatch(saveUserPollVote(info))
        alert('There was an error in voting. Try again.')
      })
  }
}
