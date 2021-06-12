import React, { Component } from 'react'
import Poll from './Poll'

class PollList extends Component {

  render() {
  return (
    <div>
    <ul>
      {this.props.pollIds.map((id) => (
        <li key={id}>
          <Poll id={id}/>
        </li>
      ))}
    </ul>
  </div>
  )};
}
export default PollList