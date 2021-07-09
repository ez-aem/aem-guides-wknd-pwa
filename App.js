import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './src/App.css';
import { Theme } from "./src/CONSTANTS";
import TabBar from "./src/components/TabBar";

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
    color: Theme.colors.text,
    fontFamily: "Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif"
  },
}