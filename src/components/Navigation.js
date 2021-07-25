import FiatCurrencySelector from './FiatCurrencySelector';
import style from '../assets/stylesheet/Navigation.module.css';

const Navigation = () => (
  <nav>
    <div className={style.navItems}>
      <span className={style.logo}>CryptoInfo</span>
      <button type="button">HOME</button>
      <button type="button">ABOUT</button>
    </div>
    <FiatCurrencySelector />
  </nav>
);

export default Navigation;
