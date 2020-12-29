import React, {useState} from "react";

import {Container, BoxLogin, InputText, ButtonLogin} from "./styles";

import api from "../../api";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const auth = async () => {
        const data = await api.post("/auth", {username: user, password: password});
        if(data.status === 200){
            localStorage.setItem("token_access", data.data.token);
            window.location.href = "/admin"
        }
    }

    return (
        <Container>
            <BoxLogin>
                    <InputText placeholder="Usuário" autoSave="false" autocomplete="off" onChange={txt => setUser(txt.target.value)} value={user}/>
                    <InputText placeholder="Senha" type="password" autoSave="false" autocomplete="off" onChange={txt => setPassword(txt.target.value)} value={password} />
                    <ButtonLogin onClick={() => auth()}>
                        Acessar
                    </ButtonLogin>
            </BoxLogin>
        </Container>
    )
}

export default Login;