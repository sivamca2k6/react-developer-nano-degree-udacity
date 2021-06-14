import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {
  
    state = {
    selectedUser: '',
  }

  handleChange = (e) => {
    this.setState(() => ({  selectedUser: e.target.value,  }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.selectedUser))
    this.setState(() => ({ selectedUser: '', }))
    this.props.history.push(`/`)
  }
  render() {
    const { selectedUser } = this.state

    return (
        <div >
            <h3 className='center'>Welcome to Would you Rather App</h3>
            <p className='center' >Please sign in and continue</p>

            <div className='poll-detail'>
                <form className='new-poll' onSubmit={this.handleSubmit} >
                    <h3 className='center'>  Login </h3>

                    <select onChange={this.handleChange} className="select"> 
                        <option value=""> -- Select a user -- </option>
                        {this.props.userIds.map(id => (
                        <option key={id} value={id}>
                            {id}
                        </option>
                        ))}
                    </select>
                
                    <button className='btn'  type='submit' disabled={selectedUser === ''}> 
                        Submit 
                    </button>
                </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users}) { // it will map only data needed. and  listen to that state only.
    
    return {
      userIds : Object.keys(users),
    }
  }

export default connect(mapStateToProps)(Login)