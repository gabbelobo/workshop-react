import React, { useState } from 'react'

const App = () => {
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmar, setConfirmar] = useState("")
    const [erro, setErro] = useState("")

    const handleNome = e => {
        setNome(e.target.value)
    }

    const handleSenha = e => {
        setSenha(e.target.value)
    }

    const handleConfirmar = e => {
        const input = e.target.value
        setConfirmar(input)
        if (input !== senha) {
            setErro("As senhas não são iguais")
        }
        else {
            setErro("")
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (senha !== confirmar) {
            alert("Erro ao enviar!")
            return
        }

        alert(`Nome: ${nome}, Senha: ${senha}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb'>
                <label htmlFor="nome">Nome: </label>
                <input
                    name='nome'
                    value={nome}
                    onChange={handleNome}
                    type="text"
                    placeholder='nome'
                />
            </div>
            <div className='mb'>
                <label htmlFor="senha">Senha: </label>
                <input
                    name='senha'
                    value={senha}
                    onChange={handleSenha}
                    type="password"
                    placeholder='senha'
                />
            </div>
            <div className='mb'>
                <label htmlFor="confirmar">Confirmar senha: </label>
                <input
                    name='confirmar'
                    value={confirmar}
                    onChange={handleConfirmar}
                    type="password"
                    placeholder='confirmar senha'
                />
            </div>
            {erro && <p className='red'>{erro}</p>}
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default App