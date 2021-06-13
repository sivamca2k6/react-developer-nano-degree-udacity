import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import PollDetails from './PollDetails';
import NewPoll from './NewPoll';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import PollVote from './PollVote'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() { return(
    <Router>
       <Fragment>
        <div className="container">
            Would you rather App
            <LoadingBar />
            <Nav />
        </div>
      
        <div>
            <Route path='/' exact component={Home} />
            <Route path='/poll/:id' component={PollDetails} />
            <Route path='/pollvote/:id' component={PollVote} />
            <Route path='/new' component={NewPoll} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/login' component={Login} />
          </div>
      </Fragment>
    </Router>
  )};
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
