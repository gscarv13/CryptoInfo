import style from '../assets/stylesheet/Footer.module.css';

const Footer = () => (
  <footer>
    <p>
      © 2021 CryptoInfo. All Rights Reserved. Made with determination by
      <a href="https://github.com/gscarv13" target="_blank" rel="noreferrer">
        <span className={style.GithubNick}> gscarv13</span>
      </a>
    </p>
  </footer>
);

export default Footer;
