import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinList from '../components/CoinList';
import style from '../assets/stylesheet/Home.module.css';

const Home = (props) => {
  const { cryptoCoins } = props;
  return (
    <div className={style.Main}>
      <div className={style.Hero}>
        <div className={style.HeroRight}>
          <h1>The Best Crypto Currency Website</h1>
          <h3>Get the latest and updated info on your favourite assets</h3>
        </div>
        <div />
      </div>
      <CoinList coins={cryptoCoins.coins} />
    </div>
  );
};

Home.propTypes = {
  cryptoCoins: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
};

Home.defaultProps = {
  cryptoCoins: {
    coins: [
      {
        rank: 1,
        icon: 'icon',
        name: 'CICoin',
        symbol: '$$',
        priceChange: 1,
        price: 1,
      },
    ],
  },
};

const mapStateToProps = (state) => ({
  cryptoCoins: state.fetchObject.cryptoCoins.data,
});

export default connect(mapStateToProps, null)(Home);
