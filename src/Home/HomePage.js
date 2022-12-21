import styled from "styled-components"

import {GiShorts} from "react-icons/gi";
import {FaTrashAlt} from "react-icons/fa"

export default function HomePage(){
    return(
        <>
            <SectionTop>
                <div>
                    <h1>Seja bem-vindo(a), Pessoa!</h1>
                </div>
            <Div>
                    <h2>Home</h2>
                    <h2>Ranking</h2>
                    <h2>Sair</h2>
            </Div>          
            </SectionTop>

            <SectionBrand>
                <h1>Shortly</h1> 
                <GiShorts/>
            </SectionBrand>

            <SectionUrl>
                <input placeholder="links que cabem no bolso"/>
                <button>Encurtar link</button>
            </SectionUrl>

            <SectionUrlShort>
                <div>
                    <p>google.com</p>
                    <p>e56cv1</p>
                    <p>quantidade de visitas: 13</p>
                </div>
                <FaTrashAlt/>
            </SectionUrlShort>
        </>
    )
}

const SectionTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & div{
        color: #5D9040;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & h2{
        margin-left: 20px;
        color: #9C9C9C;
    }
`

const SectionBrand = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    & h1{
        font-size: 80px;
    }
    & svg{
        font-size: 80px;
        color: green;
        margin-left: 10px;
    }
`

const SectionUrl = styled.section`
   display: flex ;
   justify-content: center;
   align-items: center;
   background-color: yellow;
   width: 800px;
   & input {
    margin-right: 20px;
    height: 40px;
    width: 800px;
   }
   & button{
    background-color: #5D9040;
   }
`

const SectionUrlShort = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    margin-top: 40px;
    width: 800px;
    & div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: green;
        width: 100%;
    }
    & svg{
        margin: 10px;
        color: red;
        font-size: 25px;
    }
`