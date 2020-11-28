import styled, {keyframes} from "styled-components";
import { backgrounds } from "./Item/style";
import { animated } from "react-spring";


const spinner = keyframes`

    to{
        transform: rotate(360deg) ;
    }
`;

export const Animation = styled.div`

    svg {
        animation: ${spinner} 2s linear infinite;
    }

`;

export const Container = styled.div`

    margin-top: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    > p {
        font-weight:bold;
        font-size: 120px;
        letter-spacing: 15px;
        color: grey;
    }

    ul {
        width: 100%;
        padding: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    li {

        &:hover {
            transform: translateX(10px) translateY(-10px);
            padding: 10px;
            padding-top: 1px;

           div {
             background-color: transparent;
           }
        }

        transition: transform 0.2s, padding 0.2s;
        cursor: pointer;
        margin: 10px;
        list-style: none;
        width: 260px;
        height: 310px;
        border-radius: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        color: black;
        //background: #DEF3FD;

        h1 {
            margin: 2px 0;
            color: gray;
        }

        div {
            transition: background-color 0.6s;
            background: white;
            border-radius: 50%;
            
            img {
                width: 100%;
            }
        }

        p {
            font-size: 15px;
            color: gray;
        }

        :last-child{

            transform: none;
            justify-content: center;
            //padding: 0;

            ${backgrounds["normal"]};
            color: gray;

            :hover {
                
                //background: linear-gradient(to top left, rgb(197, 230, 236), rgb(239, 187, 230));


                //svg {
                //    transform: scale(1.3);
                //}

                padding: 20px;
                cursor: pointer;
            }

        

            svg {
                transition: transform 0.2s;
            }
            
        }

    }

`;