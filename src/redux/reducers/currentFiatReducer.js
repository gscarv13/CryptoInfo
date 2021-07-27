import { CURRENT_FIAT } from '../actions/types';

const initialState = {
  name: 'USD',
  rate: '1',
  symbol: '$',
  imageUrl: 'https://static.coinstats.app/flags/USD_r.png',
};

const currentFiatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_FIAT:
      return {
        currentFiat: action.payload,
      };
    default:
      return state;
  }
};

export default currentFiatReducer;
