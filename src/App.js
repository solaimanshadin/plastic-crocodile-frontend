import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import DebrisDetails from "./page/DebrisDetails";
import Layout from "./components/Layout";
import Analytics from "./page/Analytics";
import Collection from "./page/Collection";
import { useEffect } from "react";
import { queryClient } from ".";
import { getDebrisData, getStatistics } from "./API";

function App() {
  

  useEffect(() => {
    queryClient.prefetchQuery(["debris", 1], () =>
    getDebrisData({ page: 1 }));
    queryClient.prefetchQuery(["detection-statistics", 7], getStatistics)
  }, [])
  
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
          <Route exact path="/collection">
            <Collection />
          </Route>
          <Route path="/collection/:id">
            <DebrisDetails />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
