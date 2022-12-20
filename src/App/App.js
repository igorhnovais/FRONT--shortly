import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";

import RankingPage from "../Ranking/RankingPage"

export default function App(){

    return (
        <>
            <BrowserRouter>
                <Routes> 
                    <Route path={"/"} element={<Navigate replace to="/ranking" />}/>
                    <Route path={"/ranking"} element={<RankingPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}