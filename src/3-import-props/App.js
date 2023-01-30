import React from 'react'
import Botao from './Components/Botao'
import Card from './Components/Card'

const App = () => {
    return (
        <Card>
            <Botao texto={"Login"}/>
            <Botao texto={"Logout"}/>
        </Card>
    )
}

export default App