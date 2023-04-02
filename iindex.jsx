import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export function Home() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function getCharacters() {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()

            setCharacters(data)

        
        }

        getCharacters()
    }, [])

    console.log(characters)

    return(
        
                <>

            <h1>Rick and Morty</h1>
            <br /><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fjovemnerd.com.br%2Fnerdbunker%2Frick-and-morty-experiencia-tematica-caca-ao-tesouro%2F&psig=AOvVaw0E6A3-TXkEm4enYME2igJF&ust=1680482720173000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjpoY_8if4CFQAAAAAdAAAAABAE" alt="" /> <br />
            <p>Rick and Morty é uma série de TV comica, com inúmeras referências à cultura pop. <br />
            Rick Sanches é um cientista e o ser mais inteligente do universo, ele e seu neto Morty Smith vivem diversas aventuras espaciais e multiversais com trocadilhos e piadas que muitas vezes refletem na nossa realidade. <br />
            apesar de ser uma animação o desenho tem uma faixa etária de 16 anos, por ter muito conteúdo sexual, drogas ílicitas, crimes e etc... Porém pra quem aprecia esse tipo de hujmor é um desenho incrível.</p>
            <ul>
                {
                    characters.lenght < 1 ? 
                    <span>Carregando...</span> :
                    characters.map((character) => {
                        return (
                            <li key={character._id}>
                                <Link to={`/details/${character._id}`}>{character.name}</Link>

                            </li>
                            )
                    })
                }
            </ul>
                </>


        


    )
}