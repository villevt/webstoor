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
    border-bottom: 2px solid ${Colors.get("Main")};
    color: ${Colors.get("Main")};
    height: 2em;
    font-weight: 600;
`;

export const Button = (props: ButtonProps) => {
    return(
        <StyledButton className={props.className}>
            {props.children}
        </StyledButton>
    );
}