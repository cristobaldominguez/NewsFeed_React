import React, { Component } from 'react'

class Message extends Component {

    render() {
        const { answer, num } = this.props

        return(
            <li key={num} className='message clearfix'>
                <img src={answer.profile_picture} alt={answer.user} />
                <h3>{answer.user}</h3>
                <p className='text'>{answer.message}</p>
            </li>
        )
    }
}

export default Message