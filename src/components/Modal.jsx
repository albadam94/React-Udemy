import React from 'react'
import Mensaje from './Mensaje'
import { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal,animarModal,setAnimarModal,guardarGasto,gastoEditar,setGastoEditar}) => {

const [mensaje, setMensaje] = useState(' ')    
const [nombre, setNombre] = useState(' ')
const [cantidad, setCantidad] = useState(' ')
const [categoria, setCategoria] = useState(' ')
const [fecha, setFecha] = useState(' ')
const [id, setId] = useState(' ')

useEffect(()=>{
    	if (Object.keys(gastoEditar).lenght>0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setFecha(gastoEditar.fecha)
            setId(gastoEditar.id)
}
}, [ ]);    

const ocultarModal = () => {
        setModal(false)
        setAnimarModal(false)
        setGastoEditar({ })

        setTimeout(() => {
            setModal(false)
        }, 500);
        
        const handlesubmit = (e) => {
            e.preventDefault()
            if([nombre, cantidad, categoria].includes(' ')){
                setMensaje('Todos los campos son obligatorios')
                
                setTimeout(() => {
                    setMensaje(' ')
                }, 3000);


                return
            }
        }
        guardarGasto({nombre,cantidad,categoria,id,fecha})
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="Cerrar modal"
                onClick={ocultarModal}/>
                </div>

                <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? 'animar' : ''}`}>
                    <legend>{gastoEditar.nombre?"Editar Gasto" : "Nuevo gasto"}</legend>
                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                    <div className="campo">
                        <label htmlFor="nombre">Nombre del gasto</label>
                        <input 
                        id="nombre"
                        type="text"
                        placeholder="Añade el nombre del gasto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="cantidad">Cantidad</label>
                        <input 
                        id="nombre"
                        type="number"
                        placeholder="Añade la cantidad del gasto"
                        value={cantidad}
                        onChange={(e) => setCantidad(number(e.target.value))}
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="categoria">Nombre del gasto</label>
                       <select  name="categorias" id="categoria"
                       value={categoria}
                          onChange={e => setCategoria(e.target.value)}
                       >
                            <option value="">--Seleccione--</option>
                            <option value="ahorro">Ahorro</option>
                            <option value="comida">Comida</option>
                            <option value="casa">Hogar</option>
                            <option value="gastos">Gastos Varios</option>
                            <option value="ocio">Ocio</option>
                            <option value="salud">Salud</option>
                            <option value="suscripciones">Suscripciones</option>


                       </select>
                       <div>
                            <input type="submit" 
                            value={gastoEditar.nombre ? 'Guardar cambios' : 'Añadir' }/>
                       </div>
                    </div>



                </form>
        </div>
    )
    }

export default Modal