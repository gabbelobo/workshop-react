import React, { useEffect, useState } from 'react'
import Todos from './Todos'

const App = () => {
    const [nome, setNome] = useState("")
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        console.log(`O nome é: ${nome}`)
    }, [nome])

    return (
        <div>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            <div>
                <button onClick={() => setEnabled(current => !current)}>Buscar lista</button>
            </div>
            {enabled && <Todos />}
        </div>
    )
}

export default App