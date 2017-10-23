import React, { Component } from 'react'
import Message from './Message'

class Card extends Component {

    render() {
        const { data } = this.props
        const { user, profile_picture, name, message, answers } = data
        
        return(
            <li className='card'>
                <img src={profile_picture} alt={name}/>
                <h2 className='name'>{ user }</h2>
                <p>{message}</p>
                { answers ? <ul className='messages' >{answers.map( (answer, i) => { return <Message answer={answer} key={i} /> } )}</ul> : null }
            </li>
        )
    }
}

export default Card