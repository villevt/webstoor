import React from "react";
import styled from "styled-components";
import { Colors } from "../styles";

const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    position: absolute;
    overflow: visible;
    top: 0;
    left: 0;
`

const ModalHeader = styled.div`
    height: 2.4em;
`

const Content = styled.div`
    background-color: ${Colors.get("White")};
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Close = styled.button`
    all: initial;
    color: ${Colors.get("Main")};
    cursor: pointer;
    position: absolute;
    font-size: 1.2em;
    height: 1.2em;
    width: 1.2em;
    right: 0.4em;
    top: 0.2em;
`



interface HeaderProps {
    children?: React.ReactNode,
    onModalClose: React.MouseEventHandler
}

export const Modal = (props:HeaderProps) => {
    return(
        <Background>
            <Content>
                <ModalHeader>
                    <Close onClick={props.onModalClose}>╳</Close>
                </ModalHeader>
                {props.children}
            </Content>
        </Background>
    )
}