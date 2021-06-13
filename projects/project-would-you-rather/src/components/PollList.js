import React, { Component } from 'react'
import PollShort from './PollShort'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PollList extends Component {

  render() {
  const link = this.props.isUnanswered ? 'pollvote' : 'poll'
  return (
    <div>
    <ul>
      {this.props.pollIds.map((id) => (
        <li key={id}>
           <Link to={`/${link}/${id}`} >
            <PollShort id={id}/>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )};
}
export default withRouter(connect()(PollList))