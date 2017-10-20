import React, { Component } from 'react';

class Message extends Component {

    render() {
        return(
            <li key={this.props.num}>
                <img src={this.props.answer.profile_picture} alt={this.props.answer.user} />
                <p>{this.props.answer.user}</p>
                <p>{this.props.answer.message}</p>
            </li>
        )
    }
}

export default Message