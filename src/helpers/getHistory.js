import axios from 'axios';

const getHistory = async (coinId, callback, coin) => {
  const res = await axios.get(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${coinId}`);
  const usdPrices = res.data.chart.map((array) => array[1]);
  const UNIXDates = res.data.chart.map((array) => array[0]);
  const dates = UNIXDates.map((date) => {
    const newDate = new Date(date * 1000);
    return newDate.toLocaleString('en-US', { month: 'short', day: 'numeric' });
  });
  const dataRes = {
    labels: dates,
    datasets: [
      {
        label: `${coin.toUpperCase()} PRICE IN USD`,
        data: usdPrices,
        borderColor: '#ff922f',
      },
    ],
  };
  callback(dataRes);
};

export default getHistory;
