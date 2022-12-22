import styled from "styled-components";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import {GiShorts} from "react-icons/gi";

export default function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [habilit, setHabilit] = useState(false);
    const [disabled, setDisabled] = useState(false);

    let navigate = useNavigate();

    function signUp(event){

        event.preventDefault();

        setHabilit(true);
        setDisabled(true);

        const registration = {
            name,
            email,
            password,
            confirmPassword
        };

        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`, registration);

        promise.then((resp => { alert('Parabéns por ter criado sua conta'); navigate("/signin");}));

        promise.catch((err) => {alert(err.response.data.message); setHabilit(false); setDisabled(false)});
    }

    return (
        <>
            <SectionLog>
                <Link to="/signin">
                    <h1>Entrar</h1>
                </Link>
                <Link to="/signup">
                    <h2>Cadastre-se</h2>
                </Link>  
            </SectionLog>

            <SectionBrand>
               <h1>Shortly</h1> 
               <GiShorts/>
            </SectionBrand>

            <form onSubmit={signUp} >
                <DivInput>
                    <input disabled={disabled} placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    <input disabled={disabled} placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <input disabled={disabled} placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <input disabled={disabled} placeholder="Confirme a senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                    <Button disabled={disabled} type="submit"> {!habilit ? "Criar Conta" : <ThreeDots color={"white"}/>} </Button>
                </DivInput>
            </form>
        </>
    )
}

const SectionLog = styled.section`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 50px;
    margin-bottom: 100px;
    & h1{
        font-size: 20px; 
        color: #9C9C9C;
    }
    & h2{
        font-size: 20px;
        margin-left: 20px;
        color: #5D9040; 
    }
    & a{
        text-decoration: none;
    }
`

const SectionBrand = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
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
