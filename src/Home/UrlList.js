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
            <Link to={`/urls/${item.id}`} >
                <Div>
                    <DivUrl> <p>{url}</p></DivUrl>
                    <DivShort><p>{shortUrl}</p></DivShort>
                    <DivVisit><p>quantidade de visitas: {visitCount}</p></DivVisit>
                    <FaTrashAlt onClick={deleteUrl}/>              
                </Div>
            </Link>
        </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    min-width: 800px;
    margin-bottom: 20px;
    background-color: #80CC74;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    & svg{
        font-size: 100px;
        color: red;
    }
`

const DivUrl = styled.div`
    max-width: 250px;
    text-align: center;
    color: black;
    font-size: 20px;
    color: white;
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
    color: black;
    font-size: 20px;
    color: white;
`

const DivVisit = styled.div`
    width: 250px;
    color: black;
    font-size: 18px;
    color: white;
`