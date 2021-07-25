import PropTypes from 'prop-types';
import LineChart from './LineChart';

const CoinInfo = (props) => {
  const { match, location } = props;
  const coinName = match.params.coin;
  const coinObject = location.state.coin;

  return (
    <div>
      <div>
        <span>{coinObject.rank}</span>
        <img src={coinObject.icon} alt={`${coinName} Icon`} />
        <h1>{coinName}</h1>
        <span>{coinObject.price}</span>
      </div>
      <div>
        <div>
          <LineChart coinId={coinObject.id} />
        </div>
        <div>
          <p>
            price BTC:
            {coinObject.priceBtc}
          </p>
          <p>
            market cap:
            {coinObject.marketcap}
          </p>
          <p>
            volume:
            {coinObject.volume}
          </p>
          <p>
            total supply:
            {coinObject.totalSupply}
          </p>
          <div className="links">
            <p>
              twitter:
              {coinObject.twitterUrl}
            </p>
            <p>
              website:
              {coinObject.websiteUrl}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CoinInfo.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CoinInfo;
