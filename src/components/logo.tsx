import React from 'react';
import LogoImg from './logo.svg';
import styles from "./logo.module.css";

import Image from 'react-bootstrap/Image'

interface ImageProps {
    className: string
}

export const Logo = (props: ImageProps) => {
    return(
        <Image className={props.className + " " + styles.logo} src={LogoImg} alt="Webstoor Logo" />
    );
}