import PropTypes from 'prop-types';
import style from '../assets/stylesheet/Coin.module.css';

const changePriceColor = (valueInput) => {
  let color = null;
  let value = `${valueInput} %`;

  if (value === '0') {
    color = '#fff';
  } else if (value.charAt(0) === '-') {
    color = '#dd2d58';
    value = value.replace(value[0], '- ');
  } else {
    value = `+ ${valueInput} %`;
    color = '#9cf321';
  }

  return { value, color };
};

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

  const priceObject = changePriceColor(priceChange);
  const priceHuman = Number.parseFloat(price).toFixed(2);

  return (
    <tr>
      <td>{`${rank}#`}</td>
      <td className={style.CoinContainer}>
        <img src={icon} alt={`${name} icon`} />
        <div className={style.CoinDetailContainer}>
          <p>{name}</p>
          <p className={style.CoinSym}>{symbol}</p>
        </div>
      </td>
      <td style={{ color: priceObject.color }}>{priceObject.value}</td>
      <td>{priceHuman}</td>
      <td>
        <div className={style.Link}>{link}</div>
      </td>
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
  link: PropTypes.element.isRequired,
};

export default Coin;
