import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {

    render() {
        return(
            <ul>{ this.props.data.map( (data, i) => <li key={i}>{ <Card data={data} /> }</li> )}</ul>
        );
    }
}

export default Cards