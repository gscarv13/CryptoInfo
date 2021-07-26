import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Coin from './Coin';
import style from '../assets/stylesheet/CoinList.module.css';

const CoinList = (props) => {
  const { coins } = props;
  return (
    <table data-testid="coin-list">
      <thead>
        <tr className={style.Header}>
          <td>Rank</td>
          <td>Coin</td>
          <td>Price Change 24H</td>
          <td>Price</td>
          <td>More info</td>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <Coin
            key={`${coin.rank}${coin.id}`}
            rank={coin.rank}
            icon={coin.icon}
            name={coin.name}
            symbol={coin.symbol}
            priceChange={coin.priceChange1d}
            price={coin.price}
            link={
              (
                <Link to={{ pathname: `/info/${coin.name}`, state: { coin } }}>
                  DETAILS
                </Link>
              )
            }
          />
        ))}
      </tbody>
    </table>
  );
};

CoinList.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CoinList;
