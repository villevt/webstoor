import React from 'react';
import LogoImg from './logo.svg';
import styles from "./logo.module.css";

interface ImageProps {
    className?: string
}

export const Logo = (props: ImageProps) => {
    return(
        <img className={props.className + " " + styles.logo} src={LogoImg} alt="Webstoor Logo" />
    );
}