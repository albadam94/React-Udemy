import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../Hooks/useSelectMonedas'


const InputSubmit = styled.form`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFFFFF
    ;font-weight:700 ;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

const Formulario = () => {
    const [ SelectMonedas] = useSelectMonedas( 'Elige tu moneda' )
    const [ SelectCriptomonedas] = useSelectCriptomoneda( 'Elige tu Criptomoneda' )
    
  return (
  <Form>
        <SelectMonedas/>
        <SelectCriptomonedas/>
    <inputSubmit type='submit' value='Cotizar'/>
  </Form>
  )
}

export default Formulario

