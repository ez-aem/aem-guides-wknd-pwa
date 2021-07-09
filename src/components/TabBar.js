import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { Theme } from "../CONSTANTS";
import Home from "../screens/Home";
import Adventures from "../screens/Adventures";
import Detail from "../screens/Detail";

export default function TabBar() {
  return (
    <Router>
      <div style={styles.tabsContainer}>
        <nav style={styles.tabs}>
          <Link to="/" style={styles.tab}>Home</Link>
          <Link to="/adventures" style={styles.tab}>Adventures</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/adventures">
          <Adventures />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

const styles = {
  tabsContainer: {
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    padding: "0 20px",
    zIndex: 10,
    backgroundColor: Theme.colors.background,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "space-between"
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: Theme.colors.text,
    flex: 1,
    padding: "20px",
    textDecoration: "none"
  },

}