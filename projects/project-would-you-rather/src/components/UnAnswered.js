import React, { Component } from 'react'
import Poll from './Poll'

class UnAnswered extends Component {

  render() {
  return (
        <div className='box'>
        <PollList pollIds = {this.props.pollIds} />
      </div>
  )};
}
export default UnAnswered