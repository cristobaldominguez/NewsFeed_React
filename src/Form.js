import React, { Component } from 'react'

class Form extends Component {

    render() {
        const onAddData = this.props.onAddData

        return(
            <form onSubmit={onAddData} className='main'>
                <input type='text' name='user' placeholder="Nombre" />
                <input type='text' name='profile_picture' placeholder="Foto de Perfil" />
                <input type='text' name='message' placeholder="Mensaje" />
                <button type='submit'>Guardar</button>
            </form>
        )
    }
}

export default Form