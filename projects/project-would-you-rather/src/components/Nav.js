import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  handleLogOut = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null))
    this.props.history.push(`/login`)
  }
  render () { return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li> 
          <NavLink to='/add' activeClassName='active'>
            New Poll
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            LeaderBoard
          </NavLink>
        </li>
        
        {(this.props.authedUser) ? (
               <li>
                 <div className ='center'>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 Hello , {this.props.authedUser} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <NavLink to='/' onClick={this.handleLogOut} >
                      Logout
                 </NavLink>
                 </div>
               </li>) : (
                <li>
                <NavLink to='/login' activeClassName='active'>
                  Login
                </NavLink>
              </li>
               )}
      </ul>
    </nav>
  )}
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}
export default withRouter(connect(mapStateToProps)(Nav))