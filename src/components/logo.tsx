import React from 'react';
import LogoImg from './logo.svg';
import styled from 'styled-components';

import {Colors} from "../styles";

interface ImageProps {
    className?: string
}

const StyledImg = styled.img`
    filter: drop-shadow(2px 2px ${Colors.get("White")});
`

export const Logo = (props: ImageProps) => {
    return(
        <StyledImg className={props.className} src={LogoImg} alt="Webstoor Logo" />
    );
}