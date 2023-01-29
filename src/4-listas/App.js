import React from 'react'

const App = () => {

    const textos = [
        <h1>Title</h1>,
        <p>Subtitle</p>
    ]

    const filmes = [
        {
            Id: 1,
            Title: "Avatar",
            Year: 2009,
            Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
        },
        {
            Id: 2,
            Title: "I Am Legend",
            Year: 2007,
            Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure."
        },
        {
            Id: 3,
            Title: "300",
            Year: 2006,
            Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C."
        }
    ]

    return (
        <div>
            {textos}
            {filmes.map(filme => (
                <div key={filme.Id}>
                    <h2>{filme.Title} - {filme.Year}</h2>
                    <p>{filme.Plot}</p>
                </div>
            ))}
        </div>
    )
}

export default App