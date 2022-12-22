import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";


export default function UrlOpen(){

    const {shortUrl} = useParams();
    
    const [url, setUrl] = useState();
    
    useEffect(() => {


        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/urls/open/${shortUrl}`);

        promise.then((res) => {console.log(res.data);setUrl(res.data)});

        promise.catch((err) => {console.log(err.response.data)})

    }, [shortUrl]);

    return(
        <>
        {url}
        </>
    )
}