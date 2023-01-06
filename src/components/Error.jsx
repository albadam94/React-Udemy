import React from 'react'
import styled from '@emotion/styled'

const Texto= styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding:15px;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: poppins sans-serif;
    text-align: center;

    `

const Error = ({children}) => {
  return (
    <div>
        {children}
     </div>
  )
}

export default Error