import React, { useState} from "react";
import input from "../components/input";
import button from "../../components/button"
import * as C from "./styles";
import { link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { Signup} = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
} else if (email !== emailConf) {
    setError("Os e-mails não são iguais");
    return;
}

const res = Signup(email, senha);

if (res) {
    setError(res);
    return;
}
alert("Usuário cadastrado com sucesso!");
navigate("/");
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
        type="email"
        placeholder="Confirme seu e-mail"
        value={senha}
        anChange={(e) => [setEmail(e.target.value), setError("")]}
    />
    <C.LabelError>{error}</C.LabelError>
   <Button Text="Inscrever-se" onClick={handleSignup} />
   <C.LabelSignin>
        Já tem uma conta?
        <C.Strong>
            <link to="/Entre">Registre-se</link>
        </C.Strong>
    </C.LabelSignin>
    </C.content>
    </C.Container>
    );
};

export default Signup;