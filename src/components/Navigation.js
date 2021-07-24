import FiatCurrencySelector from './FiatCurrencySelector';

const Navigation = () => (
  <nav>
    <div>
      <span>CryptoInfo</span>
      <button type="button">HOME</button>
      <button type="button">ABOUT</button>
      <FiatCurrencySelector />
    </div>
  </nav>
);

export default Navigation;
