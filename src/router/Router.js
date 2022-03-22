import {Route, Routes} from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}