import currentFiatReducer from '../../redux/reducers/currentFiatReducer';

describe('currentFiatReducer', () => {
  test('should initial state if action type does not match', () => {
    const action = {
      type: 'NOT_DEFINED',
      payload: 'invalid',
    };
    const result = currentFiatReducer(undefined, action);

    expect(result).toBeInstanceOf(Object);
    expect(result.name).toBe('USD');
  });
  test('should change the state', () => {
    const action = {
      type: 'CURRENT_FIAT',
      payload: {
        name: 'Changed',
      },
    };
    const result = currentFiatReducer(undefined, action);

    expect(result.currentFiat).toBeInstanceOf(Object);
    expect(result.currentFiat.name).toBe('Changed');
  });
});
