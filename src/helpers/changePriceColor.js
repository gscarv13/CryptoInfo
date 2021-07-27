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

export default changePriceColor;
