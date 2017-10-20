import React, { Component } from 'react'
import Form from './Form'
import Cards from './Cards'

class NewsFeed extends Component {

    state = {
        data: [{
            user: 'Clark Kent',
            profile_picture: './assets/images/highlight/Clark Kent.jpg',
            message: 'Sin mi el mundo se caería a pedazos',
            answers: [{
                user: 'Ororo Munroe',
                profile_picture: './assets/images/profile/Ororo Munroe.jpg',
                message: 'Muy lejos, más allá de las montañas de palabras'
            }, {
                user: 'Natasha Romanoff',
                profile_picture: './assets/images/profile/Natasha Romanoff.jpg',
                message: 'Alejados de los países de las vocales y las consonantes'                
            }, {
                user: 'Wade Wilson',
                profile_picture: './assets/images/profile/Wade Wilson.jpg',
                message: 'Viven los textos simulados'                
            }, {
                user: 'Bruce Wayne',
                profile_picture: './assets/images/profile/Bruce Wayne.jpg',
                message: 'Viven aislados en casas de letras, en la costa de la semántica'                
            }]
        },
        {
            user: 'Diana Prince',
            profile_picture: './assets/images/highlight/Diana Prince.jpg',
            message: 'Debo pelear para acabar con todas las guerras',
            answers: [{
                user: 'Hal Jordan',
                profile_picture: './assets/images/profile/Hal Jordan.jpg',
                message: 'Un gran océano de lenguas'
            }, {
                user: 'Wanda Maximoff',
                profile_picture: './assets/images/profile/Wanda Maximoff.jpg',
                message: 'Un riachuelo llamado Pons fluye por su pueblo'                
            }, {
                user: 'Clark Kent',
                profile_picture: './assets/images/profile/Clark Kent.jpg',
                message: 'Y los abastece con las normas necesarias'                
            }, {
                user: 'Frank Castle',
                profile_picture: './assets/images/profile/Frank Castle.jpg',
                message: 'Hablamos de un país paraisomático en el que a uno le caen pedazos'                
            }]
        },
        {
            user: 'Barry Allen',
            profile_picture: './assets/images/highlight/Barry Allen.jpg',
            message: 'Soy terrible de rápido',
            answers: [{
                user: 'Scott Lang',
                profile_picture: './assets/images/profile/Scott Lang.jpg',
                message: 'Ni siquiera los todopoderosos signos de puntuación dominan'
            }, {
                user: 'Diana Prince',
                profile_picture: './assets/images/profile/Diana Prince.jpg',
                message: 'A los textos simulados; una vida, se puede decir, poco ortográfica'
            }, {
                user: 'Barry Allen',
                profile_picture: './assets/images/profile/Barry Allen.jpg',
                message: 'Pero un buen día, una pequeña línea de texto simulado'                
            }, {
                user: 'Peter Parker',
                profile_picture: './assets/images/profile/Peter Parker.jpg',
                message: 'Llamada Lorem Ipsum, decidió aventurarse y salir al vasto mundo'                
            }]
        }]
    }

    handleOnAddData(e) {
        e.preventDefault();
        const { user, profile_picture, message } = e.target

        if (user.value && profile_picture.value && message.value ) {
            this.setState({
                data: this.state.data.concat({
                    user: user.value,
                    profile_picture: profile_picture.value,
                    message: message.value
                })
            })
        } else {
            alert('Faltan datos por agregar')
        }

        // Resets form input values after submit
        user.value = profile_picture.value = message.value = '';
    }

    render() {
        return (
            <div className="NewsFeed">
                <Cards data={this.state.data} />
                <Form onAddData={this.handleOnAddData.bind(this)} />
            </div>
        );
    }
}

export default NewsFeed