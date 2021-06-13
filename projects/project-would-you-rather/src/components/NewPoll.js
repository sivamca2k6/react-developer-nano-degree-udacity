
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/shared'
//import { Redirect } from 'react-router-dom'

class NewPoll extends Component {
  
    state = {
    option1: '',
    option2: '',
  }

  handleChange = (e) => {
    const option1 = e.target.value
    this.setState(() => ({
        option1: option1,
    }))
  }
  handleChange2 = (e) => {
    const option2 = e.target.value
    this.setState(() => ({
        option2: option2,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { option1, option2} = this.state
    const { dispatch } = this.props

    dispatch(handleAddPoll(option1, option2))

    this.setState(() => ({
        option1: '',
        option2: '',
    }))

    this.props.history.push(`/`)
  }
  render() {
    const { option1,option2 } = this.state

    return (
        <div>
            <h1 className='center'>Create New Poll</h1>

            <div className='poll-detail'>
            <form className='new-poll' onSubmit={this.handleSubmit} >
                <h2 className='center'> Would you Rather ? </h2>
               
                <input type="text"  placeholder="Enter Option 1 Text"  value={option1} 
                onChange={this.handleChange} className='text' maxLength={280} />
               
                <h3 className='center'> OR </h3>
                
                <input type="text"   placeholder="Enter Option 2 Text"  value={option2} 
                onChange={this.handleChange2} className='text' maxLength={280} />
                
                <button className='btn'  type='submit' disabled={option1 === '' || option2 === ''}> 
                    Submit 
                </button>
            </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewPoll)