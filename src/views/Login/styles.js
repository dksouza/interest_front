import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const BoxLogin = styled.div`
    width: 400px;
    height: auto;
    background: white;
    border-radius: 15px;
    padding: 20px;
`

export const InputText = styled.input`
    width: 100%;
    padding: 15px 0px 15px 0px;
    border: 1px solid grey;
    background: none;
    outline: none !important;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 35px;
`

export const ButtonLogin = styled.button`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #1E1E2F;
    border: none;
    border-radius: 35px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.5s;

    &:hover{
        opacity: 0.8;
        background-color: #C053ED;
    }
`