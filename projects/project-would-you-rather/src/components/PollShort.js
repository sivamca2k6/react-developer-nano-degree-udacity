import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import PollAvatar from './PollAvatar'


class  PollShort extends Component {
    
  render(){ 
    const {poll,pollOwnerInfo } = this.props

    return (
          <div className='poll'>
            <PollAvatar pollOwnerInfo={pollOwnerInfo} />
            <div className='poll-info'>
              <span>Would you Rather</span>
              <div>{formatDate(poll.timestamp)}</div>
              <p> Option 1: {poll.optionOne.text}...</p>
            </div>
          </div>
    )};
}

function mapStateToProps ({authedUser,users, polls}, { id }) {
  const poll = polls[id]
  const pollOwnerInfo = users[poll.author]

  return {
    poll: poll,
    pollOwnerInfo : pollOwnerInfo
  }
}

export default connect(mapStateToProps)(PollShort)