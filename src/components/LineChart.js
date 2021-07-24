import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';

const LineChart = (props) => {
  const [requestCompleted, setRequestCompleted] = useState(false);
  const getHistory = async (coinId) => {
    const res = await axios.get(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${coinId}`);
    const usdPrices = res.data.chart.map((array) => array[1]);
    const UNIXDates = res.data.chart.map((array) => array[0]);
    const dates = UNIXDates.map((date) => {
      const newDate = new Date(date * 1000);
      return newDate.toLocaleString('en-US', { month: 'short', day: 'numeric' });
    });
    setRequestCompleted(true);
    return {
      labels: dates,
      datasets: [
        {
          label: 'currency price in USD',
          data: usdPrices,
        },
      ],
    };
  };
  const { coinId } = props;

  useEffect(() => {
    return getHistory(coinId);
  });
  return (
    <div>
      {console.log()}
      { requestCompleted ? <Line data={data} /> : null }
    </div>
  );
};

LineChart.propTypes = {
  coinId: PropTypes.string,
  // dates: PropTypes.array.isRequired,
  // values: PropTypes.array.isRequired,
};

LineChart.defaultProps = {
  coinId: 'bitcoin',
};

export default LineChart;
