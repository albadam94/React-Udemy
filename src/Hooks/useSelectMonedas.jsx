import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
color:#FFFFFF
`
const useSelectMonedas = () => {

    const SelectMonedas = (label) => (
        <>
        <label>
           {label}
        </label>
    </>
    )
    return [SelectMonedas]
}

export default useSelectMonedas