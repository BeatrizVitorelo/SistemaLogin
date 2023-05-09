import React from "react";
import { useNavigate } from "react-router-dom"
import button from "../../components/button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Signup from "./signup/home";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <C.container>
            <C.title>Home</C.title>
            <button text="Sair" onClick={() => [Signup(), navigate("/")]}>
            Sair 
            </button>
        </C.container>
    );
};
export default Home;