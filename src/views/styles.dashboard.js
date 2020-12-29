import styled from "styled-components";

export const ContainerModal = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.6);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999999;
    overflow-y: auto;
    color: black;
    transition: all 0.5s;
`

export const ContentModal = styled.div`
    width: 100%;
    margin: 40px 0px;
    background: white;
    padding: 20px;
    position: relative;

    table{
        thead{
            tr>td{
                font-weight: bold;
                text-transform: uppercase;
            }
        }
        tr>td{
            color: black !important;
        }
    }
    
`

export const Close = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: white;
    right: -20px;
    top: -20px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s;

    &:hover{
        opacity: 0.9;
    }
`