import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCryptoInfo } from '../store/actions/fetchActions';
import CoinList from '../components/CoinList';
import style from '../assets/stylesheet/Home.module.css';

const Home = (props) => {
  const {
    fetchFiatCurrencies,
    fetchCryptoInfo,
    cryptoCoins,
  } = props;

  useState(fetchCryptoInfo);
  useState(fetchFiatCurrencies);

  return (
    <div className={style.Main}>
      <div className={style.Hero}>
        <div className={style.HeroRight}>
          <h1>The Best Crypto Currency Website</h1>
          <h3>Get the latest and updated info on your favourite assets</h3>
        </div>
      </div>
      <CoinList coins={cryptoCoins.coins} />
    </div>
  );
};

Home.propTypes = {
  fetchCryptoInfo: PropTypes.func.isRequired,
  fetchFiatCurrencies: PropTypes.func.isRequired,
  cryptoCoins: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
};

Home.defaultProps = {
  cryptoCoins: { coins: [{}] },
};

const mapStateToProps = (state) => ({
  cryptoCoins: state.fetchObject.cryptoCoins.data,
});

export default connect(mapStateToProps, { fetchCryptoInfo })(Home);
