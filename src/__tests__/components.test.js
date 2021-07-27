import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
});

describe('render <Navigation />', () => {
  test('Should have home link', () => {
    const homeLink = screen.getByText(/HOME/);
    expect(homeLink).toBeInTheDocument();
  });
});

describe('render <FiatCurrencySelector />', () => {
  test('Should have initial currency', () => {
    const initialFiatCurrency = screen.getByText(/^USD$/);
    expect(initialFiatCurrency).toBeInTheDocument();
  });

  test('Should have select element', () => {
    const select = screen.getByTestId('fiat-select');
    expect(select).toBeInTheDocument();
  });
});

describe('render <Footer />', () => {
  test('Should display copyright', () => {
    const footer = screen.getByText(/All Rights Reserved/);
    expect(footer).toBeInTheDocument();
  });
  test('Should display author link', () => {
    const link = screen.getByText(/gscarv13/);
    expect(link).toBeInTheDocument();
  });
});

describe('render <CoinList />', () => {
  test('Should display list', () => {
    const coinList = screen.getByTestId('coin-list');
    expect(coinList).toBeInTheDocument();
  });
  test('Should have one thead and one tbody row', () => {
    const coinList = screen.getByTestId('coin-list');
    expect(coinList.children.length).toBe(2);
  });
});

describe('render <Coin />', () => {
  test('Should render rank', () => {
    const rank = screen.getByText(/1#/);
    expect(rank).toBeInTheDocument();
  });
  test('Should render coin name', () => {
    const coin = screen.getByText(/CICoin/);
    expect(coin).toBeInTheDocument();
  });
  test('Should render details button', () => {
    const details = screen.getByText(/DETAILS/);
    expect(details).toBeInTheDocument();
  });
});

describe('navigate to <CoinInfo />', () => {
  test('Should display market status', async () => {
    const link = screen.getByTestId('crypto-link-1');
    await userEvent.click(link);
    expect(screen.getByText(/Market Status/)).toBeInTheDocument();
    expect(screen.getByText(/Useful Links/)).toBeInTheDocument();
    expect(screen.getByTestId('chart')).toBeInTheDocument();
  });
});
