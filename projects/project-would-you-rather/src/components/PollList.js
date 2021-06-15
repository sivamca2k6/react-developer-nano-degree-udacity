import React, { Component } from 'react'
import PollShort from './PollShort'
import {  withRouter,NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class PollList extends Component {

  render() {
  return (
    <div>
    <ul>
      {this.props.pollIds.map((id) => (
        <li key={id}>
           <NavLink to={`/questions/${id}`} >
            <PollShort id={id}/>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
  )};
}
export default withRouter(connect()(PollList))