import React from "react";
import { useState } from "react";

import {Button} from "./Button";
import {Logo} from "./logo";
import { LoginForm } from "./LoginForm";

import { Colors } from "../styles";
import styled from 'styled-components';
import { Modal } from "./Modal";

const StyledHeader = styled.div`
  align-items: center;
  background-color: ${Colors.get("White")};
  display: flex;
  gap: 1em;
  justify-content: center;
  height: clamp(3rem, 12vh, 7.5rem);
`;

const HeaderSide = styled.div`
    width: 40%;
`;

const HeaderMid = styled.div`
    width: 20%;
`;

const StyledLogo = styled(Logo)`
  height: clamp(1rem, 4vh, 2.5rem);
  margin: auto; 
  width: 100%;
`;

interface HeaderProps {
    children?: React.ReactNode
}

export const Header = (props: HeaderProps) => {
    const [loginOpen, setLoginOpen] = useState(false);

    return(
        <StyledHeader>
            <HeaderSide />
            <HeaderMid>
                <StyledLogo />
            </HeaderMid>
            <HeaderSide>
                <Button onClick={() => {setLoginOpen(true)}}>Login</Button>
            </HeaderSide>
            {loginOpen && <Modal onModalClose={() => setLoginOpen(false)}>
                <LoginForm/>
            </Modal>}
        </StyledHeader>
    )
}