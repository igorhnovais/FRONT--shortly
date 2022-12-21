import styled from "styled-components";

import {GiShorts} from "react-icons/gi";
import {FaTrophy} from "react-icons/fa";

export default function RankingPage(){
    return (
        <>
            <SectionLog>
                <h1>Entrar</h1>
                <h2>Cadastre-se</h2>
            </SectionLog>

            <SectionBrand>
               <h1>Shortly</h1> 
               <GiShorts/>
            </SectionBrand>

            <SectionName>
                <FaTrophy/>
                <h1>Ranking</h1>
            </SectionName>

            <SectionRanking>
                <div>
                    <h1>1. fulanainha - 32 linhs - 2 visualização</h1>
                </div>
            </SectionRanking>

            <SectionAlert>
                <h1>Crie sua conta para usar nosso serviço!</h1>
            </SectionAlert>
        </>
    )
};

const SectionLog = styled.section`
    background-color: red;
    display: flex;
    justify-content: flex-end;
    & h1{
        font-size: 15px;
        color: #5D9040;
    }
    & h2{
        font-size: 15px;
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

const SectionName = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    & svg{
        font-size: 60px;
        color: yellow;
    }
    & h1{
        font-size: 40px;
        margin-left: 10px;
    }
`

const SectionRanking = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: red;

`

const SectionAlert = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`
