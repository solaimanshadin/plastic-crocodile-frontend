import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import DebrisDetails from "./page/DebrisDetails";
import Layout from "./components/Layout";
import Analytics from "./page/Analytics";
import Collection from "./page/Collection";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/debris/:id">
            <DebrisDetails />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
