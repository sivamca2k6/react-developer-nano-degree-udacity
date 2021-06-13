import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollAvatar from './PollAvatar'


class  UserProfile extends Component {
    
  render(){ 
    const {user} = this.props
    const totalVote = user.questions.length +  Object.values(user.answers).length

    return (
          <div className='poll-detail'>
            <PollAvatar pollOwnerInfo={user} />
            <div className='poll-info'>
                <div className='box-option'>
                    <p> Answered Polls: { Object.values(user.answers).length}</p>
                </div>  
                <div className='box-option'>
                     <p> Created Polls: {user.questions.length}</p>
                </div>
            </div>
            <div className='box-userprofile-score'>
                <div className='box-option'>
                    <h2> Score</h2>
                </div>
                <div className='box-option'>
                    <h1>  {totalVote}</h1>
                </div>
            </div>
          </div>
    )};
}

function mapStateToProps ({authedUser,users}, { id }) {
  const user = users[id]
  return {
    authedUser:authedUser,
    user: user,
  }
}

export default connect(mapStateToProps)(UserProfile)

  