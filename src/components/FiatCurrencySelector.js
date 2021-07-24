import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFiatCurrencies } from '../store/actions/fetchActions';
import currentFiatAction from '../store/actions/currentFiat';

const FiatCurrencySelector = (props) => {
  const { fiats, currentFiat, fetchFiatCurrencies } = props;
  useState(fetchFiatCurrencies);

  const handleSelect = (e) => {
    if (e.target.value === '') return;

    const current = fiats
      .filter((item) => item.name === e.target.value)
      .pop();

    props.currentFiatAction(current);
  };

  return (
    <div>
      <span>Current Currency</span>
      <img src={currentFiat.imageUrl} alt="Fiat currency symbol" />
      <span>{currentFiat.name}</span>
      <div>
        <select onClick={handleSelect}>
          <option value="">Select...</option>
          {fiats.map((item) => (
            <option
              key={item.name}
              value={item.name}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

FiatCurrencySelector.propTypes = {
  fiats: PropTypes.arrayOf(PropTypes.object),
  currentFiat: PropTypes.objectOf(PropTypes.string),
  currentFiatAction: PropTypes.func.isRequired,
  fetchFiatCurrencies: PropTypes.func.isRequired,
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
  currentFiatAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiatCurrencySelector);