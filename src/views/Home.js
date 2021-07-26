import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinList from '../components/CoinList';
import style from '../assets/stylesheet/Home.module.css';
import bg from '../assets/images/chart.png';

const Home = (props) => {
  const {
    cryptoCoins,
  } = props;

  return (
    <div className={style.Main}>
      <div className={style.Hero}>
        <div className={style.HeroRight}>
          <h1>The Best Crypto Currency Website</h1>
          <h3>Get the latest and updated info on your favourite assets</h3>
        </div>
        <div>
          <img src={bg} alt="" />
        </div>
      </div>
      <CoinList coins={cryptoCoins.coins} />
    </div>
  );
};

Home.propTypes = {
  cryptoCoins: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
};

Home.defaultProps = {
  cryptoCoins: { coins: [{}] },
};

const mapStateToProps = (state) => ({
  cryptoCoins: state.fetchObject.cryptoCoins.data,
});

export default connect(mapStateToProps, null)(Home);
