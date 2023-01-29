import React from 'react'
import './Botao.css'

const Botao = ({ texto }) => {
    return (
        <button className='btn'>{texto}</button>
    )
}

export default Botao