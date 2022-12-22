import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import {FaTrashAlt} from "react-icons/fa"

export default function UrlList({item, i, user}){

    const {shortUrl, url, visitCount} = item;

    const navigate = useNavigate();

    function deleteUrl(){

            const config = {
                headers: {
                    Authorization: `Bearer ${user}`
                }
            };

            const promise = axios.delete(`${process.env.REACT_APP_API_BASE_URL}/urls/${item.id}`, config);

            promise.then(resp => alert('apagado'));

            promise.catch(err => {console.log(err.response.data.message); 
            alert("Seu tempo expirou!"); 
            navigate("/"); 
            window.location.reload()})
    }

    return (
        <>
            <Div>
                <Link to={`/urls/${item.id}`} >
                    <DivUrl> <p>{url}</p></DivUrl>
                    <DivShort><p>{shortUrl}</p></DivShort>
                    <DivVisit><p>quantidade de visitas: {visitCount}</p></DivVisit>
                    <FaTrashAlt onClick={deleteUrl}/>
                </Link>
            </Div>
        </>
    )
}

const Div = styled.div`
    display: flex;
    & svg{
        font-size: 100px;
        color: red;
    }
`

const DivUrl = styled.div`
    max-width: 250px;
    background-color: red;
    text-align: center;
    & div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const DivShort = styled.div`
    width: 250px;
    display: flex;
    justify-content: center;
    margin-left: 100px;
    
`

const DivVisit = styled.div`
    width: 250px;
`