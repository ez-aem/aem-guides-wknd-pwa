import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

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
          <Link to="/adventures:path" style={styles.tab}>Detail</Link>
        </nav>
      </div>
      <Switch>
        <Route path="/adventures">
          <Adventures />
        </Route>
        <Route path="/adventures:path">
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
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    padding: "0 20px"
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
    color: "#fff",
    flex: 1,
    padding: "20px",
    textDecoration: "none"
  },

}