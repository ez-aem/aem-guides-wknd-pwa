import './App.css';


import { Theme } from "./CONSTANTS";
import TabBar from "./components/TabBar";

export default function App() {
  return (
    <div style={styles.container}>
      <TabBar />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    height: "100vh",
    width: "100vw",
    position: "relative",
    flexDirection: "column",
    backgroundColor: Theme.colors.background
  },
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