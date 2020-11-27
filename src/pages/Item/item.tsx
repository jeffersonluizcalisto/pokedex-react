import React from "react";
import { PokemonDetail } from "../main";
import { Item as ItemList } from './style';


interface PokemonList {
    pokemon: PokemonDetail
}

const Item: React.FC<PokemonList> = ({pokemon}) => {

    let types = "";
    for (const type of pokemon.types) {
        if(!types){
            types = `${type.type.name} `;
        }else{
            types += `| ${type.type.name}`;
        }
    }

    return (
        <ItemList bg={pokemon.types[0].type.name || "normal"}>
                <div>
                    <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
                </div>

                <h1>{pokemon.name}</h1>

                <p>{types}</p>
        </ItemList>
    );
}


export default Item;