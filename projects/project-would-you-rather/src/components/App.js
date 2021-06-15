import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router,Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Questions from './Questions';
import NewPoll from './NewPoll';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import { setAuthedUser } from '../actions/authedUser'
import AuthRoute from "./AuthRoute";
import NotFound from "./NotFound"

class App extends Component {
  
  componentDidMount() {

    const userSession = localStorage.getItem("userSession");
    if(userSession)
        this.props.dispatch(setAuthedUser(JSON.parse(userSession)))

    console.log(userSession)

    this.props.dispatch(handleInitialData())
  }
  render() { 
     return(
    <Router>
       <Fragment>
        <div className="container">
            <h2 className="title"> Would you rather App</h2>
            <LoadingBar />
            <Nav />
        </div>
      
        <Switch>
            <AuthRoute exact path='/' component={Home} type="private" />
            <AuthRoute path='/questions/:id' component={Questions} type="private" />
            <AuthRoute path='/add' component={NewPoll} type="private" />
            <AuthRoute path='/leaderboard' component={LeaderBoard} type="private" />
            <AuthRoute path='/login' component={Login} type="guest" />
            <AuthRoute component={NotFound} />
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
