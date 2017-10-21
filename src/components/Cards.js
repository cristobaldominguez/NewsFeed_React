import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {
    
    render() {
        return(
            <ul className='cards'>{ this.props.data.map( (data, i) => <Card data={data} k={i} /> )}</ul>
        );
    }
}

export default Cards