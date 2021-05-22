import React, { Component } from 'react';

class UserInfo extends Component{

    state = {
        show : false
    }
    
    updateState = () => {

        this.setState( (currState) => ({ 
            show : !currState.show === true
        }));
    };
    

    render () { return (
        <tr>
            <td>{this.props.user.userName}</td>
            <td>{this.props.user.firstName}</td>
            <td>{this.props.user.lastName}</td>
            <td>
                <span> {this.state.show ? this.props.user.noOfGamePlayed :'' }</span>
                <button onClick={this.updateState}>
                 {this.state.show ? 'Hide the Number of Games Played' : 'Show the Number of Games Played' } 
                    </button>
            </td> 
        </tr>
    )}
}

export default UserInfo;