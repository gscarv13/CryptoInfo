import PropTypes from 'prop-types';
import Coin from './Coin';

const CoinList = (props) => {
  const { coins } = props;
  return (
    <table>
      <thead>
        <tr>
          <td>Rank</td>
          <td>Coin</td>
          <td>Price Change</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <Coin
            key={coin.id}
            rank={coin.rank}
            icon={coin.icon}
            name={coin.name}
            symbol={coin.symbol}
            priceChange={coin.priceChange1d}
            price={coin.price}
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
