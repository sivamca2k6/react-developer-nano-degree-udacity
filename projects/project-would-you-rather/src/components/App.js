import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router,Switch } from 'react-router-dom'
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
import { setAuthedUser } from '../actions/authedUser'
import AuthRoute from "./AuthRoute";

class App extends Component {
  
  componentDidMount() {

    const userSession = localStorage.getItem("userSession");
    if(userSession)
        this.props.dispatch(setAuthedUser(JSON.parse(userSession)))

    //console.log(userSession)

    this.props.dispatch(handleInitialData())
  }
  render() { return(
    <Router>
       <Fragment>
        <div className="container">
            <h2 className="title"> Would you rather App</h2>
            <LoadingBar />
            <Nav />
        </div>
      
        <Switch>
            <AuthRoute exact path='/' component={Home} type="private" />
            <AuthRoute path='/poll/:id' component={PollDetails} type="private" />
            <AuthRoute path='/pollvote/:id' component={PollVote} type="private" />
            <AuthRoute path='/new' component={NewPoll} type="private" />
            <AuthRoute path='/leaderboard' component={LeaderBoard} type="private" />
            <AuthRoute path='/login' component={Login} type="guest" />
        </Switch>
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
