import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../../App';

beforeEach(() => {
  render(<App />);
});

test('render navigation bar', () => {
  const homeLink = screen.getByText(/HOME/);
  expect(homeLink).toBeInTheDocument();
});

test('render <FiatCurrencySelector />', () => {
  const initialFiatCurrency = screen.getByText(/^USD$/);
  const select = screen.getByTestId('fiat-select');
  expect(initialFiatCurrency).toBeInTheDocument();
  expect(select).toBeInTheDocument();
});

test('render <Footer />', () => {
  const footer = screen.getByText(/All Rights Reserved/);
  expect(footer).toBeInTheDocument();
});

test('render <CoinList />', () => {
  const coinList = screen.getByTestId('coin-list');
  expect(coinList).toBeInTheDocument();
});
