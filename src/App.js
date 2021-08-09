import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './components/Navigation';
import CoinInfo from './views/CoinInfo';
import Home from './views/Home';
import News from './views/News';
import Footer from './components/Footer';

const App = () => (
  <Provider store={store}>
    <div className="App" data-testid="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info/:coin" component={CoinInfo} />
          <Route exact path="/news" component={News} />
        </Switch>
        <Footer />
      </Router>
    </div>
  </Provider>
);

export default App;
