import React, { Component } from 'react';

class Form extends Component {

    render() {
        return(
            <form onSubmit={this.props.onAddData}>
                <input name='user' placeholder="Nombre" />
                <input name='profile_picture' placeholder="Foto Perfil" />
                <input name='message' placeholder="Mensaje" />
                <button>Enviar</button>
            </form>
        )
    }
}

export default Form