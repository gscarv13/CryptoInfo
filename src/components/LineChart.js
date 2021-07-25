import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';

const LineChart = (props) => {
  const initialState = {
    labels: ['a', 'b'],
    datasets: [
      { label: 'test', data: [1, 2] },
    ],
  };
  const [data, setData] = useState(initialState);

  const getHistory = async (coinId) => {
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
          label: 'CURRENCY PRICE IN USD',
          data: usdPrices,
          borderColor: '#ff922f',
        },
      ],
    };
    setData(dataRes);
  };

  const { coinId } = props;
  useEffect(() => {
    getHistory(coinId);
  }, [coinId]);

  return (
    <div style={{
      border: '1px solid #fff',
      borderRadius: '8px',
      padding: '10px',
      backgroundColor: '#e5e4e8',
    }}
    >
      <Line data={data} dark tooltip />
    </div>
  );
};

LineChart.propTypes = {
  coinId: PropTypes.string,
};

LineChart.defaultProps = {
  coinId: 'bitcoin',
};

export default LineChart;
