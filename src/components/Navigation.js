import { Link } from 'react-router-dom';
import FiatCurrencySelector from './FiatCurrencySelector';
import style from '../assets/stylesheet/Navigation.module.css';

const Navigation = () => (
  <nav>
    <div className={style.navItems}>
      <span className={style.logo}>CryptoInfo</span>
      <Link to="/"> HOME </Link>
      <Link to="/news"> NEWS </Link>
    </div>
    <FiatCurrencySelector />
  </nav>
);

export default Navigation;
