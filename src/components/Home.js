import axios from 'axios'
import {useEffect, useState} from 'react'
export default function Home(){
    const [pokemon, setPokemon] = useState([])
    useEffect(()=>{
        getPokemon()
    }, [])
    const randomNumber = () =>{
        return Math.floor(Math.random() * 100) + 1
    }
    const getPokemon = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`).then(result=>{
            setPokemon(result.data)
                console.log(pokemon.types)
        })
    }
    return(
        <>
        <p>Name: {pokemon.name}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        <p>Type: 
            {
                pokemon.types?
                pokemon.types.map(type=>type.type.name + " "):
                null
            }
        </p>
        <button onClick={()=>getPokemon()}>Nouveau pokeProute!</button>
        </>       
    )
}