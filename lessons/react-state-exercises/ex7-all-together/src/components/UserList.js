import React, { Component } from 'react';
import UserInfo from './UserInfo';


class UserList extends Component {


    render (){ return(
        <div>
            <h1> User List { this.props.userInfos.length}</h1>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>No of Games</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.userInfos.map( user => (
                      <UserInfo key={user.userName} user = {user} />
                ))
                }
                 </tbody>
            </table>
        </div>
        
    )}
}

export default UserList;