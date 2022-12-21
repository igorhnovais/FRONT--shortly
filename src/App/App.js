import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";

import RankingPage from "../Ranking/RankingPage";
import HomePage from "../Home/HomePage";
import SignUp from "../Sign/SignUp";
import SignIn from "../Sign/SignIn";

export default function App(){

    return (
        <>
            <BrowserRouter>
                <Routes> 
                    <Route path={"/"} element={<Navigate replace to="/ranking" />}/>
                    <Route path={"/ranking"} element={<RankingPage/>}/>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/signup"} element={<SignUp/>}/>
                    <Route path={"/signin"} element={<SignIn/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}