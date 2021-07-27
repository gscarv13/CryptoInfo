import store from '../../redux/store';

describe('Redux redux', () => {
  it('should return initial state for fetchObject', () => {
    const storeData = store.getState();
    expect(storeData.fetchObject).toBeInstanceOf(Object);
  });
  it('should return initial state for currentFiat', () => {
    const storeData = store.getState();
    expect(storeData.currentFiat).toBeInstanceOf(Object);
  });
});
