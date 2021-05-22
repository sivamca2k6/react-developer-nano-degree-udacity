import React, { Component } from 'react';

class Adduser extends Component {

    state = {
        userInfo : {
            userName : '',
            firstName : '',
            lastName : '',
            noOfGamePlayed:0
        }
    }

    //validations
    isAnyInputEmpty = ()  => this.state.userInfo.userName ==='' || this.state.userInfo.firstName ==='' || this.state.userInfo.lastName ==='';

    hasUserExists = (userName) => this.props.userInfos.some(user => user.userName === userName) ;

    //events
    addUser = (event) => {
        event.preventDefault();

        if(this.hasUserExists(this.state.userInfo.userName) === false)
            this.props.addUser(this.state.userInfo); 
        else 
            alert("user already exists.");    

    }

    handleInputChange = event => {
        const { name, value } = event.target; //name -- form input name mapp into 
        this.setState( (currState) => ({
          userInfo: {
            ...currState.userInfo,
            [name]: value,
          },
        }));
      };

    render(){ return (
        <form onSubmit={this.addUser}>
            <div>
                <h1> User List</h1>
                <div>
                <label for="userName">User Name</label>
                <input  type="text" placeholder="User Name" name="userName" id="userName"
                        value={this.state.userInfo.userName} onChange={this.handleInputChange}  />
                 </div>
                 <div>
                 <label for="firstName">First Name</label>                            
                <input  type="text" placeholder="First Name" name="firstName"
                        value={this.state.userInfo.firstName} onChange={this.handleInputChange}  />
                </div>
                <div>
                    <label for="lastName">Last Name</label>     
                    <input  type="text" placeholder="Last Name" name="lastName" 
                            value={this.state.userInfo.lastName} onChange={this.handleInputChange}  />     
                </div>     
                <div>
                    <button disabled={this.isAnyInputEmpty()}>Add</button>
                </div>
            </div>
        </form>
    )}

}

export default Adduser;