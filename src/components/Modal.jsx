import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal}) => {

    const ocultarModal = () => {
        console.log('Ocultar modal')
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="Cerrar modal"/>
                onClick={ocultarModal}
                </div>
        </div>
    )
    }

export default Modal