import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LineChart from '../components/LineChart';
import style from '../assets/stylesheet/CoinInfo.module.css';

const CoinInfo = (props) => {
  const { match, location, currentFiat } = props;
  const coinName = match.params.coin;
  const coinObject = location.state.coin;

  return (
    <div className={style.CoinInfoContainer}>
      <div className={style.Title}>
        <div className={style.TitleInfoLeft}>
          <img src={coinObject.icon} alt={`${coinName} Icon`} />
          <h1>{coinName}</h1>
        </div>
        <div className={style.PriceUsdContainer}>
          <span>
            {`${currentFiat.symbol} ${coinObject.price.toFixed(2)} `}
            <span className={style.USD}>{currentFiat.name}</span>
          </span>
        </div>
      </div>
      <div className={style.Main}>
        <div className={style.Chart}>
          <LineChart
            coinId={coinObject.id}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className={style.CoinDetails}>
          <div>
            <div className={style.MarketInfo}>
              <h4>Market Status</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Market Cap:</td>
                    <td>{coinObject.marketCap}</td>
                  </tr>
                  <tr>
                    <td>Volume: </td>
                    <td>{coinObject.volume}</td>
                  </tr>
                  <tr>
                    <td>Total supply: </td>
                    <td>{coinObject.totalSupply}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4>Price Change</h4>
            <table>
              <tbody>
                <tr>
                  <td>1H: </td>
                  <td>{coinObject.priceChange1h}</td>
                </tr>
                <tr>
                  <td>1D: </td>
                  <td>{coinObject.priceChange1d}</td>
                </tr>
                <tr>
                  <td>1W: </td>
                  <td>{coinObject.priceChange1w}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={style.Links}>
            <h4>Useful Links</h4>
            <a href={coinObject.twitterUrl} target="_blank" rel="noreferrer">
              <i className="fab fa-twitter-square"> Twitter </i>
            </a>
            <br />
            <a href={coinObject.websiteUrl} target="_blank" rel="noreferrer">
              <i className="fas fa-globe"> Official Website </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

CoinInfo.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  currentFiat: PropTypes.objectOf(PropTypes.string),
};

CoinInfo.defaultProps = {
  currentFiat: {
    symbol: '$',
    name: 'USD',
  },
};

const mapStateToProps = (state) => ({
  currentFiat: state.currentFiat.currentFiat,
});

export default connect(mapStateToProps, null)(CoinInfo);
