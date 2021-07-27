import { CURRENT_FIAT } from './types';

const currentFiat = (current) => (dispatch) => {
  dispatch({
    type: CURRENT_FIAT,
    payload: current,
  });
};

export default currentFiat;
