import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export function Details() {

    const[details, setDetails] = useState( {} )

    const { id } = useParams()

    useEffect(() => {
        async function getDetails() {
     const response = await fetch(`https://rickandmortyapi.com/api/character${id}`)
            const data = await response.json()

            setDetails(data)
        }

        getDetails()

    }, [])
    return (
        <>
            <img src={details.photo} alt="" />
        </>
    )
}