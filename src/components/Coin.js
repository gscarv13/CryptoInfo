import PropTypes from 'prop-types';

const Coin = (props) => {
  const {
    rank,
    icon,
    name,
    symbol,
    priceChange,
    price,
  } = props;

  return (
    <tr>
      <td>{rank}</td>
      <td>
        <img src={icon} alt={`${name} icon`} />
        *
        {name}
        *
        {symbol}
      </td>
      <td>{priceChange}</td>
      <td>{price}</td>
    </tr>
  );
};

Coin.propTypes = {
  rank: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  priceChange: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Coin;
