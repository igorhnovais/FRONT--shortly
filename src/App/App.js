import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";

import AuthProvider from "../Components/Auth";
import RankingPage from "../Ranking/RankingPage";
import HomePage from "../Home/HomePage";
import SignUp from "../Sign/SignUp";
import SignIn from "../Sign/SignIn";
import GlobalStyle from "../Components/GlobalStyle";
import  OnlyUrl from "../Home/OnlyUrl";
import UrlOpen from "../Home/UrlOpen"

export default function App(){

    return (
        <>
            <BrowserRouter>
                <GlobalStyle/>
                <AuthProvider>
                    <Routes> 
                        <Route path={"/"} element={<Navigate replace to="/ranking" />}/>
                        <Route path={"/ranking"} element={<RankingPage/>}/>
                        <Route path={"/home"} element={<HomePage/>}/>
                        <Route path={"/signup"} element={<SignUp/>}/>
                        <Route path={"/signin"} element={<SignIn/>}/>
                        <Route path={"/urls/:id"} element={<OnlyUrl/>}/>
                        <Route path={"/urls/open/:shortUrl"} element={<UrlOpen/>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}