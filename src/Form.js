import React, { Component } from 'react'

class Form extends Component {

    render() {
        const onAddData = this.props.onAddData

        return(
            <form onSubmit={onAddData}>
                <input name='user' placeholder="Nombre" />
                <input name='profile_picture' placeholder="Foto de Perfil" />
                <input name='message' placeholder="Mensaje" />
                <button>Enviar</button>
            </form>
        )
    }
}

export default Form