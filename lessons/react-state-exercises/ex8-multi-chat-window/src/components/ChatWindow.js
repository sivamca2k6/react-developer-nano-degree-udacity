import React, { Component } from 'react';


class ChatWindow extends Component {

    state ={
        message :''
    }

    isDisabled = () => this.state.message === '';

    handleInputChange = (event) => {
        this.setState ( { message : event.target.value  })
      }

    sendMessage = (event) => {
        event.preventDefault();
        var msg = { username: this.props.username, text: this.state.message }
        this.props.sendMessage(msg); 
    }
    
    render() {
    var {messages} = this.props;
    return (
            <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>
            <ul className="message-list">
                {messages.map((message, index) => (
                <li
                    key={index}
                    className={
                    message.username === this.props.username ? 'message sender' : 'message recipient'
                    }
                >
                    <p>{`${message.username}: ${message.text}`}</p>
                </li>
                ))}
            </ul>

            <div>
                <form className="input-group" onSubmit={this.sendMessage}>
                <input type="text" className="form-control" placeholder="Enter your message..."  name="msg"
                        value={this.state.message} onChange={this.handleInputChange} />
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                    </button>
                </div>
                </form>
            </div>
            </div>
    );
    }
}

export default ChatWindow;