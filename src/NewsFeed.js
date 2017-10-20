import React, { Component } from 'react';
import Form from './Form';
import Cards from './Cards';

class NewsFeed extends Component {

    state = {
        data: [{
            user: 'Cristobal',
            profile_picture: 'http://lorempixel.com/200/200/animals/',
            message: 'Hola mundo',
            answers: [{
            user: 'Nicolas',
            profile_picture: 'http://lorempixel.com/200/200/cats/',
            message: 'Hola mundo',
            }, {
            user: 'Barbara',
            profile_picture: 'http://lorempixel.com/200/200/animals/',
            message: 'Chao mundo',
            }]
        },
        {
            user: 'Braulio',
            profile_picture: 'http://lorempixel.com/200/200/animals/',
            message: 'Hola mundo',
            answers: [{
            user: 'Rachel',
            profile_picture: 'http://lorempixel.com/200/200/cats/',
            message: 'Hola mundo',
            }, {
            user: 'Josephine',
            profile_picture: 'http://lorempixel.com/200/200/animals/',
            message: 'Chao mundo',
            }]
        }]
    }

    handleOnAddData (e) {
        e.preventDefault();
        let user = {
            user: e.target.user.value,
            profile_picture: e.target.profile_picture.value,
            message: e.target.message.value
        }

        this.setState({
            data: this.state.data.concat([user])
        })
    }

    render() {
        return (
            <div className="App">
                <Form onAddData={this.handleOnAddData.bind(this)} />
                <Cards data={this.state.data} />
            </div>
        );
    }
}

export default NewsFeed;