import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import {GiShorts} from "react-icons/gi";
import {FaTrophy} from "react-icons/fa";
import RankingList from "../Ranking/RankingList";

export default function RankingPage(){

    const [ranking, setRanking] = useState([]);

    useEffect(() => {


        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/ranking`);

        promise.then(getRanking);

        promise.catch(err => console.log(err.response.data.message))

        function getRanking(resp){         
            setRanking(resp.data)
        }
        
    }, [ranking]);


    return (
        <>
            <SectionLog>
                <Link to="/signin">
                    <h1>Entrar</h1>
                </Link>
                <Link to ="/signup">
                    <h2>Cadastre-se</h2>
                </Link>
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
                    {ranking?.map((item, i) => <RankingList item={item} i={i} key={i}/>)}
                </div>
            </SectionRanking>

            <SectionAlert>
                <h1>Crie sua conta para usar nosso serviço!</h1>
            </SectionAlert>
        </>
    )
};

const SectionLog = styled.section`
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
    & div{
        display: flex;
        flex-direction: column;
    }
`

const SectionAlert = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`
