import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import Resultado from './Resultado'
import useSelectMonedas from '../Hooks/useSelectMonedas'
import { monedas} from '../data/monedas'

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
    margin-top: 30px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }

`


const Formulario = (setMonedas) => {

    const [criptos, SetCriptos] = useState([ ])
    const [error, SetError] = useState([false ])
    
    const [ moneda, SelectMonedas] = useSelectMonedas( 'Elige tu moneda', monedas)
    const [ criptomoneda, SelectCriptomoneda] = useSelectMonedas( 'Elige tu criptomoneda', criptos)
   
    useEffect(() => {
        const consultarAPI = async () => {
            const url= 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
           const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arrayCriptos= resultado.Data.map(cripto => {
              
            const objeto= {
              id: cripto.CoinInfo.Name,
              nombre: cripto.CoinInfo.FullName
            }
             return objeto
            })
              setCriptos(arrayCriptos)
        }
        consultarAPI( );
    }, [ ])

    const handleSubmit = e => {
        e.preventDefault();
       
        if ([moneda,criptomoneda].includes(' ')){
            SetError(true)
            return
        }
        SetError(false)
        setMonedas({moneda, criptomoneda})
    }
    
  return (
    <>
    {error &&<Error>Todos los campos son obligatorios</Error>}
  
      <Form onSubmit={handleSubmit}  >
            <SelectMonedas/>
            <SelectCriptomoneda/>
            
            <InputSubmit type='submit' value='Cotizar'/>
      </Form>
  </>
  )
}

export default Formulario

