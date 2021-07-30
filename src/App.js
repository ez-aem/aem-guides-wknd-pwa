import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Adventures from "./screens/Adventures";
import Detail from "./screens/Detail";
import Home from "./screens/Home";
import Magazine from "./screens/Magazine";

import './App.css';
import { Theme } from "./CONSTANTS";
import TabBar from "./components/TabBar";

export default function App() {

  return (
    <div style={styles.container}>
      <HashRouter>
        <Switch>
          <Route exact path="/adventures">
            <Adventures />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/magazine">
            <Magazine />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <TabBar />
      </HashRouter>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    minHeight: "100vh",
    maxHeight: "100%",
    width: "100vw",
    maxWidth: "100%",
    position: "relative",
    flexDirection: "column",
    backgroundColor: Theme.colors.background,
    paddingTop: "10px",
    color: Theme.colors.text,
  },
}