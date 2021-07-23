import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Navigation from './Navigation';
import Home from './Home';

const App = () => (
  <Provider store={store}>
    <div className="App" data-testid="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
