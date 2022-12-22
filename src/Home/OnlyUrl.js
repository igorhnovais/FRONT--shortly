import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function OnlyUrl(){

    const {id} = useParams();
    
    const [url, setUrl] = useState();
    
    useEffect(() => {

        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/urls/${id}`);

        promise.then((res) => {console.log(res.data);setUrl(res.data)});

        promise.catch((err) => {console.log(err.response.data)})

    }, [id]);

    function view(){
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/urls/open/${url?.shortUrl}`);
        promise.then(console.log('deu certo'));
        promise.catch(err => console.log(err.message));
    }
    
    return (
        <>
            <Div>
                <h1>Seu link mais curto!</h1>
                <a href={`${url?.url}`} onClick={view}>
                    <p>{url?.shortUrl}</p>
                </a>
            </Div>
            <Div>
                <h1>link de origem!</h1>
                <p>{url?.url}</p>
            </Div>  
        </>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 90px;
    margin-top:20px;
    & h1{
        font-size: 80px;
        margin-bottom: 10px;
    }
    & p{
        font-size: 60px;
    }
`