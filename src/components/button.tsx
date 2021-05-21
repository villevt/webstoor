import React from 'react';
import styled from 'styled-components';

import {Colors} from '../styles';

interface ButtonProps {
    className?: string,
    children?: React.ReactNode
}

const StyledButton = styled.button`
    background: none;
    border: none;
    color: ${Colors.get("Main")};
    height: 1.75em;
    font-weight: 700;
    text-shadow: 2px 2px ${Colors.get("White")};
`;

export const Button = (props: ButtonProps) => {
    return(
        <StyledButton className={props.className}>
            {props.children}
        </StyledButton>
    );
}