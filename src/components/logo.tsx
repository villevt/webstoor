import LogoImg from './logo.svg';
import styles from "./logo.module.css";

export const Logo = () =>
  <div>
    <img src={LogoImg} alt="Webstoor Logo" className={styles.logo}/>
  </div>
