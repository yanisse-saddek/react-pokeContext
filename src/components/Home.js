import axios from 'axios'
import {useEffect, useState, useContext} from 'react'
import {UserContext} from '../App'
import NotConnected from './NotConnected'

export default function Home(){
    const context = useContext(UserContext)
    const [pokemon, setPokemon] = useState(null)
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
    const showPokeBinks =()=>{
        if(pokemon){
            return (
                <div>
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
                </div>   
            )    
        }
    }
    return(
        <>
        {
            context.Log
            ?
            showPokeBinks()
            :
            <NotConnected/>
        }

        </>       
    )
}