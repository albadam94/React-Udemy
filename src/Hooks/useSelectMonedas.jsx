import {useState} from 'react'
import styled from '@emotion/styled'

const {state, setState} = useState(' ')

const Label = styled.label`
color:#FFFFFF;
display: block;
font-family: 'poppins', sans-serif;
font-size: 24px;
font-weight: 700;
margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 12px;
    border-radius: 10px;
    margin-bottom: 20px;

`

const useSelectMonedas = () => {

    const SelectMonedas = (label, opciones) => (
        <>
        <label>
           {label}
        </label>
        <Select
        value={state}
        onChange={e => setState(e.target.value)}
        >
            <option value=''>- Seleccione -</option>
            {opciones.map(opcion => (
                <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
            ))}
        </Select>
        
    </>
    )
    return [state, SelectMonedas]
}

export default useSelectMonedas