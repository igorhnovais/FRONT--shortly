import styled from "styled-components"
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {GiShorts} from "react-icons/gi";
import {AuthContext} from "../Components/Auth";
import UrlList from "./UrlList";


export default function HomePage(){

    const [url, setUrl] = useState("");
    const [info, setInfo] = useState([]);

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    function newUrl(event){
        event.preventDefault();

        const link = {
            url
        };

        const config = {
            headers: {
                Authorization: `Bearer ${user}`
            }
        };

        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/urls/shorten`, link, config);
        promise.then((resp) => {setInfo(resp.data)});
        promise.catch((err) => {alert(err.response.data.message)});

    }

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${user}`
            }
        };

        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/me`, config);
        promise.then(resp => setInfo(resp.data));
        promise.catch(err => {console.log(err.response.data.message); alert("Seu tempo expirou!"); navigate("/"); window.location.reload()})

    }, [info])

    return(
        <>
            <SectionTop>
                <div>
                    <h1>Seja bem-vindo(a), {info.name}</h1>
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

            <form onSubmit={newUrl}>
                <SectionUrl>
                    <input placeholder="links que cabem no bolso" value={url} onChange={(e) => setUrl(e.target.value)} required/>
                    <button>Encurtar link</button>
                </SectionUrl>
            </form>

            <SectionUrlShort>
                   {info.shortedUrls?.map((item, i) => <UrlList item={item} i={i} user={user} key={i}/>)}
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
   width: 800px;
   margin-top: 40px;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    width: 800px;
    & div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #c6c6c6;
        width: 100%;
        margin-bottom: 10px;
    }
`