import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollAvatar from './PollAvatar'
import { handleSavePollVote } from '../actions/shared'

class  PollVote extends Component {

  constructor() {
    super();
    this.state = {
      option: ""
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
  
    event.preventDefault()
    const { dispatch, poll, authedUser } = this.props
    
    dispatch(handleSavePollVote({
      qid: poll.id,
      answer: this.state.option,
      authedUser
    }))

    this.props.history.push(`/poll/${poll.id}`)
  }

  onChangeValue(event) {
    //console.log(this.props)
    this.setState({option : event.target.value})
  }

  render(){ 
    const {poll,pollOwnerInfo } = this.props

    return (
          <div className='poll-detail'>
             <PollAvatar pollOwnerInfo={pollOwnerInfo} />
            <div className='poll-info'>
              <h1>Would you Rather</h1>
              <div className='box-option' onChange={this.onChangeValue}>
                <input type="radio" value="optionOne"  name="vote" /> Option 1 : {poll.optionOne.text}
              </div>
              <div className='box-option' onChange={this.onChangeValue}>
                <input type="radio" value="optionTwo" name="vote" /> Option 2 :  {poll.optionTwo.text}
              </div>
              <button onClick={this.onSubmit} className='btn' disabled={!this.state.option}>Submit</button>
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
    users: users,
    pollOwnerInfo : pollOwnerInfo
  }
}

export default connect(mapStateToProps)(PollVote)
  