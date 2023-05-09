import React, { useState } from 'react'
import input from "../../components/input";
import  button from "../../components/button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const Signin = () => {
    const { Signin } = useAuth();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
   
    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }
        
        const res = Signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };

  return (
  <C.Container>
    <C.Label>Sistema de Login</C.Label>
    <C.content>
        <input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        anChange={(e) => [setEmail (e.target.value), setError("")]}
    />
    <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        anChange={(e) => [setSenha(e.target.value), setError("")]}
    />
    <C.LabelError>{error}</C.LabelError>
    <button text="Entrar" onClick={handleLogin} />
    <C.LabelSignup>
        Não tem uma conta?
        <C.Strong>
            <link to="/singnup">Registre-se</link>
        </C.Strong>
    </C.LabelSignup>
        </C.content>
    </C.Container>
  );
};

export default Signin;