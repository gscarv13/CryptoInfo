import axios from 'axios';
import { FETCH_CRYPTO_INFO, FETCH_FIAT_CURRENCIES } from './types';

export const fetchCryptoInfo = (currency = 'USD') => async (dispatch) => {
  const data = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=25&currency=${currency}`);
  dispatch({
    type: FETCH_CRYPTO_INFO,
    payload: data,
  });
};

export const fetchFiatCurrencies = () => async (dispatch) => {
  const data = await axios.get('https://api.coinstats.app/public/v1/fiats');
  dispatch({
    type: FETCH_FIAT_CURRENCIES,
    payload: data,
  });
};
