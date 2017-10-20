import React, { Component } from 'react';
import Message from './Message';

class Card extends Component {

    render() {
        return(
            <div className='card'>
                <p className='name'>{this.props.data.user}</p>
                <img src={this.props.data.profile_picture} alt={this.props.data.name}/>
                <p>{this.props.data.message}</p>
                { this.props.data.answers ? <ul>{this.props.data.answers.map( (answer, num) => { return <Message answer={answer} num={num} /> } )}</ul> : null }
            </div>
        )
    }
}

export default Card;