import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import { Theme } from "./CONSTANTS";
import TabBar from "./components/TabBar";

export default function App() {
  return (
    <div style={styles.container}>
      <Router>
        <TabBar />
      </Router>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    minHeight: "100vh",
    width: "100vw",
    position: "relative",
    flexDirection: "column",
    backgroundColor: Theme.colors.background,
    paddingTop: "10px",
    color: Theme.colors.text
  },
}