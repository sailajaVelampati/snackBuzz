import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { alpha, makeStyles } from "@material-ui/core/styles";

import Layout from "./components/layout";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import HomeStyle from "./pages/HomeStyle";

const useStyles = makeStyles((theme) => HomeStyle(theme, alpha));

function App() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div data-testid="applicationRoot" className={classes.root}>
      <Layout history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
