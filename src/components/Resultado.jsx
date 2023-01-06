import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'poppins', sans-serif;
    display: flex;
    align-items: start;
    gap: 1rem   ;
    margin-top: 30 px;  

    
    `
const imagen = styled.img`
    display: block;
    width: 120px;
    `


    const Texto = styled.p`
    font-size: 18px;
    span {font-weight:600}
    `

    const Precio = styled.span`
    font-size: 24px;
    span {font-weight:600}
    `

const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto"/>
    <div>
            <Precio>El precio es de : <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del dia : <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas : <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima Actualización: <span>{LASTUPDATE}</span></Texto>
    </div>
    </Contenedor>
  )
}

export default Resultado