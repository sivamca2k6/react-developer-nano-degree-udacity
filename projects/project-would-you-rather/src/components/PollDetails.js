import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollAvatar from './PollAvatar'

class  PollDetails extends Component {

  render(){ 
    
    const {authedUser,poll,pollOwnerInfo } = this.props
    const totalVote = poll.optionOne.votes.length + poll.optionTwo.votes.length

    return (
          <div className='poll-detail'>
             <PollAvatar pollOwnerInfo={pollOwnerInfo} />
            <div className='poll-info'>
              <h1>Would you Rather</h1>
              <div className='box-option'>
                <p> Option 1: {poll.optionOne.text}</p>
                {poll.optionOne.votes.includes(authedUser) &&   <h2> You Voted</h2>}
                <div className="box-poll-result"> 
                    [Votes : {poll.optionOne.votes.length} / {totalVote} ]
                    [{poll.optionOne.votes.length / totalVote * 100}%]
                </div>
              </div>
              
              <div className='box-option'>
                <p> Option 2: {poll.optionTwo.text}</p>
                {poll.optionTwo.votes.includes(authedUser) &&   <h2> You Voted</h2>}
                <div className="box-poll-result"> 
                    [Votes : {poll.optionTwo.votes.length} / {totalVote} ]
                    [{poll.optionTwo.votes.length / totalVote * 100}%]
                </div>
              </div>
            </div>
          </div>
    )};
}

function mapStateToProps ({authedUser,users, polls},props) {
  const { id } = props.match.params
  const poll = polls[id]
  const pollOwnerInfo = users[poll.author]

  return {
    authedUser,
    poll: poll,
    pollOwnerInfo : pollOwnerInfo
  }
}

export default connect(mapStateToProps)(PollDetails)
  