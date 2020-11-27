import api from './api';
import { useState, useEffect } from "react";
import React from 'react';

interface ListPokemons {
    results: {
        name: string;
        url: string;
    }[];
}

const getPokemons = async (): Promise<ListPokemons> => {
    return await api.get("/pokemon");
}

const Pokemon: React.FC = () => {
    return (<h1>ddd</h1>);
}

const listPokemons = async () => {
    //const [pokemons, setPokemons] = useState<ListPokemons>({} as ListPokemons);

    //useEffect(() => {
    //    const response = getPokemons();
//
    //    const {results} = response.data;
//
    //    setPokemons(results);
    //}, []);

    // pokemons;
};


export default Pokemon;