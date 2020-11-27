import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    box-shadow: 0px 2px 20px gray;
    z-index: 999;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background: linear-gradient(to right, red, purple);

    div {

        :first-child{
            padding-left: 10px;
        }
        
        position: relative;
        display: flex;
        align-items: center;

        flex: 1;

        img{
            width: 120px;
        }
    }

`;