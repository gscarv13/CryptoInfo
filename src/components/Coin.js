import PropTypes from 'prop-types';

const Coin = (props) => {
  const {
    rank,
    icon,
    name,
    symbol,
    priceChange,
    price,
    link,
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
      <td>{link}</td>
    </tr>
  );
};

Coin.propTypes = {
  rank: PropTypes.number,
  icon: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  priceChange: PropTypes.number,
  price: PropTypes.number,
  link: PropTypes.string,
};

Coin.defaultProps = {
  rank: 1,
  icon: 'icon',
  name: 'name',
  symbol: 'symbol',
  priceChange: 1,
  price: 1,
  link: '',
};

export default Coin;
