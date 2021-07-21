import { HashRouter } from "react-router-dom";

import './App.css';
import { Theme } from "./CONSTANTS";
import TabBar from "./components/TabBar";

export default function App() {
  return (
    <div style={styles.container}>
      <HashRouter>
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
    width: "100vw",
    maxWidth: "100%",
    position: "relative",
    flexDirection: "column",
    backgroundColor: Theme.colors.background,
    paddingTop: "10px",
    color: Theme.colors.text
  },
}