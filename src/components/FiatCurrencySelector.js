import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFiatCurrencies, fetchCryptoInfo } from '../redux/actions/fetchActions';
import currentFiatAction from '../redux/actions/currentFiat';
import style from '../assets/stylesheet/FiatCurrencySelector.module.css';

const FiatCurrencySelector = (props) => {
  const {
    fiats,
    currentFiat,
    fetchFiatCurrencies,
    currentFiatAction,
    fetchCryptoInfo,
  } = props;
  const location = useLocation();

  useEffect(() => {
    fetchFiatCurrencies();
    fetchCryptoInfo();
  }, []);

  const handleSelect = (e) => {
    if (e.target.value === '') return;

    const current = fiats
      .filter((item) => item.name === e.target.value)
      .pop();

    currentFiatAction(current);
    fetchCryptoInfo(current.name);
  };

  const checkLocation = (location) => {
    let result = null;
    if (!location.pathname.match(/Info/gi)) {
      result = (
        <select onClick={handleSelect} data-testid="fiat-select">
          <option value="">Select...</option>
          {fiats.map((item) => (
            <option
              key={`${item.symbol}${item.name}`}
              value={item.name}
            >
              {item.name}
            </option>
          ))}
        </select>
      );
    }
    return result;
  };

  return (
    <div className={style.FiatCurrencySelector}>
      <span className={style.current}>CURRENCY</span>
      <div className={style.icon}>
        <img src={currentFiat.imageUrl} alt="Fiat currency symbol" />
        <span>{currentFiat.name}</span>
      </div>
      <div>
        {checkLocation(location)}
      </div>
    </div>
  );
};

FiatCurrencySelector.propTypes = {
  fiats: PropTypes.arrayOf(PropTypes.object),
  currentFiat: PropTypes.objectOf(PropTypes.string),
  currentFiatAction: PropTypes.func.isRequired,
  fetchFiatCurrencies: PropTypes.func.isRequired,
  fetchCryptoInfo: PropTypes.func.isRequired,
};

FiatCurrencySelector.defaultProps = {
  fiats: [{}],
  currentFiat: {
    name: 'USD',
    rate: '1',
    symbol: '$',
    imageUrl: 'https://static.coinstats.app/flags/USD_r.png',
  },
};

const mapStateToProps = (state) => ({
  fiats: state.fetchObject.fiats.data,
  currentFiat: state.currentFiat.currentFiat,
});

const mapDispatchToProps = {
  fetchFiatCurrencies,
  fetchCryptoInfo,
  currentFiatAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiatCurrencySelector);
