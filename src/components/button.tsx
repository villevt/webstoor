import React from 'react';
import styled from 'styled-components';

import {Colors} from '../styles';

interface ButtonProps {
    className?: string,
    children?: React.ReactNode
}

const StyledButton = styled.button`
    border: 2px solid ${Colors.get("Main")};
    border-top: none;
    border-left: none;
    border-radius: 100px;
    color: ${Colors.get("Main")};
    height: 2em;
    font-weight: 700;
`;

export const Button = (props: ButtonProps) => {
    return(
        <StyledButton className={props.className}>
            {props.children}
        </StyledButton>
    );
}