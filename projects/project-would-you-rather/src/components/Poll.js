import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'

class  Poll extends Component {
    
render(){
    const { authedUser,poll,pollOwnerInfo } = this.props

    if (poll === null) {
      return <p>This poll doesn't existd</p>
    }

    console.log(authedUser)

    return (
        <Link to={`/poll/${poll.id}`} className='poll'>
            <div className='avatarBox'>
                <img
                    src={pollOwnerInfo.avatarURL}
                    alt={`Avatar of ${pollOwnerInfo.name}`}
                    className='avatar'
                />
                <p>{pollOwnerInfo.name} asks...</p>
           </div>
          <div className='poll-info'>
            <div>
              <span>Would you Rather</span>
              <div>{formatDate(poll.timestamp)}</div>
             
              <p> Option 1: {poll.optionOne.text}...</p>
            </div>
          </div>
        </Link>
    )};
}

  function mapStateToProps ({authedUser,users, polls}, { id }) {
    const poll = polls[id]
    const pollOwnerInfo = users[poll.author]

    return {
      authedUser,
      poll: poll,
      pollOwnerInfo : pollOwnerInfo
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Poll))
  