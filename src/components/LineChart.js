import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import getHistory from '../helpers/getHistory';

const LineChart = (props) => {
  const { coinName, fiatName, coinId } = props;
  const initialState = {
    labels: ['a', 'b'],
    datasets: [
      { label: 'test', data: [1, 2] },
    ],
  };
  const [data, setData] = useState(initialState);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Price of Coin in the last 30 days',
        color: '#fff',
        fontsize: '42px',
      },
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          color: '#555',
        },
      },
    },
  };

  useEffect(() => {
    getHistory(coinId, setData, coinName, fiatName);
  }, [fiatName]);

  return (
    <div style={{
      border: '1px solid #aaa',
      borderRadius: '8px',
      padding: '10px',
      backgroundColor: '#1a1b24',
    }}
    >
      <Line data={data} options={options} tooltip />
    </div>
  );
};

LineChart.propTypes = {
  coinId: PropTypes.string,
  coinName: PropTypes.string,
  fiatName: PropTypes.string,
};

LineChart.defaultProps = {
  coinId: 'bitcoin',
  coinName: 'Bitcoin',
  fiatName: 'USD',
};

export default LineChart;
