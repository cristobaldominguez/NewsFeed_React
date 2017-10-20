import React, { Component } from 'react'

class Message extends Component {

    render() {
        const { answer, num } = this.props

        return(
            <li key={num}>
                <img src={answer.profile_picture} alt={answer.user} />
                <p>{answer.user}</p>
                <p>{answer.message}</p>
            </li>
        )
    }
}

export default Message