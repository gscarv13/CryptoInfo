import { FETCH_CRYPTO_INFO, FETCH_FIAT_CURRENCIES } from '../actions/types';

const initialState = {
  cryptoCoins: '',
  fiats: '',
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_INFO:
      return {
        ...state,
        cryptoCoins: action.payload,
      };
    case FETCH_FIAT_CURRENCIES:
      return {
        ...state,
        fiats: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
