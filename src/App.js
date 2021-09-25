import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home from './page/Home';
import Footer from './components/Footer';
import DebrisDetails from './page/DebrisDetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/debris/:id">
          <DebrisDetails />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
