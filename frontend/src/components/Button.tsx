import React from 'react';
import styled from 'styled-components';

import {Colors} from '../styles';

interface ButtonProps {
    className?: string,
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler
}

const StyledButton = styled.button`
    background: none;
    border: none;
    border-bottom: 2px solid ${Colors.get("Main")};
    color: ${Colors.get("Main")};
    cursor: pointer;
    display: block;
    font-weight: lighter;
    justify-self: flex-end;
    margin-left: auto;
    margin-right: 3em;
    font-size: 1.2em;
`;

export const Button = (props: ButtonProps) => {
    return(
        <StyledButton className={props.className} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
}