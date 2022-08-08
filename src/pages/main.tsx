import React, {useState, useCallback, useEffect} from "react";
import { Container, Animation } from "./style";
import api from '../services/api'
import Pokemon from "../services/pokemon";
import Item from './Item/item';
import { BsPlusCircle } from "react-icons/bs";
import { ImSpinner11 } from "react-icons/im";
import styles from './Item/main.module.css';

interface PokemonsList {
    next: string;
    results: {
        name: string;
        url: string;
    }[]
}

export interface PokemonDetail {
    abilities: {
        ability: {
            name: string;
        }
    }[],
    name: string;
    types: [{
        type: {
            slot: number;
            name: string;
        }
    }],
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            }
        }
    }
}

const Main: React.FC = () => {

    const [pokemons, setPokemons] = useState<PokemonsList>({} as PokemonsList);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(23);
    const [spin, setSpin] = useState(false);
    const [load, setLoad] = useState(false);

    const [pokemonsDetails, setPokemonsDetails] = useState<PokemonDetail[]>([]);

    async function getPokemons(){

        setSpin(true);

        const response =  await api.get<PokemonsList>(`/pokemon/?offset=${offset}&limit=23`);
        const pokemonsList = response.data;        

        setPokemons(pokemonsList);
        setOffset(offset + limit);

        const arrayPokemons = [];
        for (const poke of pokemonsList.results) {
            const response =  await api.get<PokemonDetail>(poke.url, {baseURL:""});
            arrayPokemons.push(response.data);
        }

        setPokemonsDetails([...pokemonsDetails, ...arrayPokemons]);
        setSpin(false);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    return(
        <Container>
            
            <ul>
                {pokemonsDetails.map((pokemon) => {
                    
                    return (
                        <Item pokemon={pokemon}/>
                    );
                })}

                <li onClick={getPokemons}>
                
                    {!spin ? <BsPlusCircle className={styles.banana} size={100} />: <Animation><ImSpinner11 className={styles.spinner} size={100} /></Animation> }
                </li>
            </ul>
           
        </Container>
    );
}

export default Main;