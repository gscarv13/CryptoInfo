import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCryptoInfo, fetchFiatCurrencies } from '../actions/fetchActions';

const Home = (props) => {
  const {
    fetchFiatCurrencies,
    fetchCryptoInfo,
    fiats,
    cryptoCoins,
  } = props;

  useState(fetchCryptoInfo);
  useState(fetchFiatCurrencies);

  return (
    <div>
      <div>
        <h1>The Best Crypto Currency Website</h1>
        <h3>Get the latest and updated info on your favourite assets</h3>
      </div>
    </div>
  );
};

Home.propTypes = {
  fetchCryptoInfo: PropTypes.func.isRequired,
  fetchFiatCurrencies: PropTypes.func.isRequired,
  cryptoCoins: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  fiats: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  cryptoCoins: { coins: [{}] },
  fiats: [{}],
};

const mapStateToProps = (state) => ({
  cryptoCoins: state.fetchObject.cryptoCoins.data,
  fiats: state.fetchObject.fiats.data,
});

export default connect(mapStateToProps, { fetchCryptoInfo, fetchFiatCurrencies })(Home);
