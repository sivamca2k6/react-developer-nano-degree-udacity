import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollList from './PollList'


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {isUnanswered: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (param) => {
      this.setState(prevState => ({
        isUnanswered:  param === "unanswered" ? true : false,
      }));
  }

  getFilteredPollList = (isUnanswered) =>{
    const { polls,users,authedUser } = this.props
    const loggedInUser = users[authedUser]
    let filteredPollList = {}
    
    if(loggedInUser !== undefined && loggedInUser.answers !== undefined)
    {
      const answered = Object.keys(loggedInUser.answers)
      filteredPollList = Object.keys(polls)
      .filter(key => isUnanswered ? !answered.includes(key) : answered.includes(key))
      .sort((a,b) => a.timestamp - b.timestamp)
      .reduce((obj, key) => {
        obj[key] = polls[key];
        return obj;
      }, {});

      //console.log(filteredPollList);
    }

    return  Object.keys(filteredPollList)
  }

  render() {
    
    const {isUnanswered} = this.state;
    const pollIds = this.getFilteredPollList(this.state.isUnanswered);

  return (
    <div >
      <div className='box'>
        <label className='boxSelect' id="unanswered" onClick={(e) =>this.handleClick("unanswered")} 
         style={{ backgroundColor: isUnanswered ? 'grey' : '',}}>
          <h3 className='center' >Un Answered</h3>
        </label>
        <label  className='boxSelect' id="answered" onClick={(e) => this.handleClick("answered")}
        style={{ backgroundColor: isUnanswered ? '' : 'grey',}}>
            <h3 className='center'>Answered</h3>
        </label>
      </div>
      <div className='box'>
        <PollList pollIds = {pollIds} />
      </div>   
  </div>
  )};
}

function mapStateToProps ({ authedUser,users, polls }) { // it will map only data needed. and  listen to that state only.
  return {
    polls : polls,
    users : users,
    authedUser: authedUser
  }
}

  
export default connect(mapStateToProps)(Home)