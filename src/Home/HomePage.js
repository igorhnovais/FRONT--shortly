import styled from "styled-components"
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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

    }, [info, navigate, user])

    return(
        <> 
            <SectionTop>
                <Div>
                    <h1>Seja bem-vindo(a), {info.name}</h1>
                </Div>
                <Div>
                    <h2>Home</h2>
                    <Link to="/ranking">
                        <h2>Ranking</h2>
                    </Link>
                    
                    <h2>Sair</h2>
                </Div>          
            </SectionTop>
            <Nav>
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
            </Nav>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SectionTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    & div{
        color: #5D9040;
        margin-left: 100px;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
    margin-top: 20px;
    margin-bottom: 50px;
    & h2{
        margin-left: 20px;
        color: #9C9C9C;
    }
    & a{
        text-decoration: none;
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
    width: 800px;
    height: 50px;
   }
   & button{
    background-color: #5D9040;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 3px;
    width: 200px;
    margin-top: 10px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
    }
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
        width: 100%;
        
    }
    & a{
        text-decoration: none;
    }
`