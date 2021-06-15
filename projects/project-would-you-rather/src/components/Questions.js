import React, { Component } from 'react'
import { Redirect,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PollVote from './PollVote'
import PollDetails from './PollDetails';

class Questions extends Component {

isAnswered = () =>{
    const { id,authedUser,users } = this.props
    const loggedInUser = users[authedUser]
    
    if(loggedInUser !== undefined && loggedInUser.answers !== undefined)
    {
        return Object.keys(loggedInUser.answers).indexOf(id) > 0
    }

    return false;
}
    
render(){

    const { id } = this.props

    if (id === null) {
      return <Redirect to='/NotFound' />
    }

    return (
         <div>
            {this.isAnswered() ? <PollDetails id={id} /> :   <PollVote id={id} />}    
         </div>
    )};
}

function mapStateToProps ({authedUser,users, polls},props) {

    let { id } = props.match.params;
    id  = polls[id] ? id: null;

    return {
      id,
      authedUser,
      users   
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Questions))
  