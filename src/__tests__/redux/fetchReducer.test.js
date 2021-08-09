import fetchReducer from '../../redux/reducers/fetchReducer';

describe('fetchReducer', () => {
  test('should initial state if action type does not match', () => {
    const action = {
      type: 'NOT_DEFINED',
      payload: 'invalid',
    };
    const result = fetchReducer(undefined, action);

    expect(result).toBeInstanceOf(Object);
  });
  test('should change the fiat currencies', () => {
    const action = {
      type: 'FETCH_FIAT_CURRENCIES',
      payload: [{ name: 'GBP' }, { name: 'JPY' }],
    };
    const result = fetchReducer(undefined, action);

    expect(result.fiats).toBeInstanceOf(Array);
    expect(result.fiats[0].name).toBe('GBP');
  });
  test('should change the crypto coin info', () => {
    const action = {
      type: 'FETCH_CRYPTO_INFO',
      payload: [{ name: 'Bitcoin' }, { name: 'Ethereum' }],
    };
    const result = fetchReducer(undefined, action);

    expect(result.cryptoCoins).toBeInstanceOf(Array);
    expect(result.cryptoCoins[1].name).toBe('Ethereum');
  });
});
