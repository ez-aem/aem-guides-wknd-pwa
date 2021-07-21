
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";

import { Theme } from "../CONSTANTS";
import Home from "../screens/Home";
import Adventures from "../screens/Adventures";
import Detail from "../screens/Detail";

export default function TabBar() {

  const location = useLocation();
  const isHomeSelected = location.pathname === "/";
  const isAdventuresSelected = location.pathname === "/adventures";
  return (
    <>
      <div style={styles.tabsContainer}>
        <nav style={styles.tabs}>
          <Link to="/" style={{ ...styles.tab, color: isHomeSelected ? Theme.colors.accent : Theme.colors.text, }}>
            <TiHome size="2rem" />
            <span style={styles.tabText}>Home</span>
          </Link>
          <Link to="/adventures" style={{ ...styles.tab, color: isAdventuresSelected ? Theme.colors.accent : Theme.colors.text, }}>
            <CgMenuGridR size="2rem" />
            <span style={styles.tabText}>Adventures</span>
          </Link>
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
    </>
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
    height: "6rem",
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
  tabText: {
    fontFamily: "Source Sans Pro",
  }
}