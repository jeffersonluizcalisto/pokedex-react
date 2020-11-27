import styled, {css, keyframes} from "styled-components";

export const backgrounds = {
    steel: css`background: #f4f4f4;`,
    fire: css`background: #FDDFDF;`,
    grass: css`background: #DEFDE0;`,
    electric: css`background: #FCF7DE;`,
    water: css`background: #DEF3FD;`,
    ice: css`background: #DEF3FD;`,
    ground: css`background: #f4e7da;`,
    rock: css`background: #d5d5d4;`,
    fairy: css`background: #fceaff;`,
    poison: css`background: #98d7a5;`,
    bug: css`background: #f8d5a3;`,
    dragon: css`background: #97b3e6;`,
    psychic: css`background: #eaeda1;`,
    flying: css`background: #F5F5F5;`,
    fighting: css`background: #E6E0D4;`,
    normal: css`background: #F5F5F5;`
}

interface ItemProps {
    bg: "steel" | "fire" | "grass" | "electric" | "water" | "ice" | "ground" | "rock" | "fairy" | "poison" | "bug" | "dragon" | "psychic" | "flying" | "fighting" | "normal";
}

const myanimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const Item = styled.li<ItemProps>`

    box-shadow: 0px 2px 12px gray;

    animation: ${myanimation} 1s;
    ${(props) => backgrounds[props.bg!]};
`;
