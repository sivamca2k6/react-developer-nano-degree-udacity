import React, { Component } from 'react'
import UserProfile from './UserProfile'
import { connect } from 'react-redux'

class LeaderBoard extends Component {

  render() {
  return (
    <div>
    <ul>
      {this.props.usersIds.map((user) => (
        <li key={user.id}>
            { <UserProfile id={user.id}/> }
        </li>
      ))}
    </ul>
  </div>
  )};
}

function mapStateToProps ({authedUser,users}) {

    const userSorted = Object.values(users).map((user) => {
        user.score = user.questions.length +  Object.values(user.answers).length
        //console.log( user)
        return user;
    }).sort((a,b) => b.score - a.score)

    //todo - sort by total score
    return {
      authedUser,
      usersIds : userSorted
    }
  }

export default connect(mapStateToProps)(LeaderBoard)