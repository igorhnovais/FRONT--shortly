import styled from "styled-components";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { Link, useNavigate  } from "react-router-dom";

import {GiShorts} from "react-icons/gi";
import {AuthContext} from "../Components/Auth";

export default function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [habilit, setHabilit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    let navigate = useNavigate();

    const { setUser } = useContext(AuthContext);

    function signIn(event){

        event.preventDefault();

        setHabilit(true);
        setDisabled(true);

        const login = {
            email,
            password
        };

        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/signin`, login);

        promise.then(resp => {setUser(resp.data); navigate("/home")});

        promise.catch((err => {alert(err.response?.data.message); setHabilit(false); setDisabled(false)}));
    };


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

            <form onSubmit={signIn}>
                <DivInput>
                    <input disabled={disabled} placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <input disabled={disabled} placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <Button disabled={disabled} type="submit"> {!habilit ? "Entrar" : <ThreeDots color={"white"}/>} </Button>
                </DivInput>
            </form>
        </>
    )
}

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

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & input{
        width: 303px;
        height: 45px;
        margin-top: 10px;
        border: 1px solid rgb(207,207,207);
        border-radius: 3px;
        padding-left: 10px;
        font-size: 20px;
        ::placeholder{
            font-size: 20px;
            color: black;
        }
    }
    & a{
        text-decoration: none;
    }
   
`

const Button = styled.button`
    background-color: #5D9040;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 3px;
    width: 303px;
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
`