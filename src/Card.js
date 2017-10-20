import React, { Component } from 'react'
import Message from './Message'

class Card extends Component {

    render() {
        const { user, profile_picture, name, message, answers } = this.props.data
        
        return(
            <div className='card'>
                <p className='name'>{ user }</p>
                <img src={profile_picture} alt={name}/>
                <p>{message}</p>
                { answers ? <ul>{answers.map( (answer, i) => { return <Message answer={answer} num={i} /> } )}</ul> : null }
            </div>
        )
    }
}

export default Card