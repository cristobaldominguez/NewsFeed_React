import React, { Component } from 'react'

class Message extends Component {

    render() {
        const { answer } = this.props

        return(
            <li className='message clearfix'>
                <img src={answer.profile_picture} alt={answer.user} />
                <h3>{answer.user}</h3>
                <p className='text'>{answer.message}</p>
            </li>
        )
    }
}

export default Message