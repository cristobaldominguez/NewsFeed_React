import React, { Component } from 'react'
import Message from './Message'

class Card extends Component {

    render() {
        const { user, profile_picture, name, message, answers, num } = this.props.data
        
        return(
            <li key={num} className='card'>
                <img src={profile_picture} alt={name}/>
                <h2 className='name'>{ user }</h2>
                <p>{message}</p>
                { answers ? <ul className='messages' >{answers.map( (answer, i) => { return <Message answer={answer} num={i} /> } )}</ul> : null }
            </li>
        )
    }
}

export default Card