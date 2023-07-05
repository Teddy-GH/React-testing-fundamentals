import React from "react";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./components/mui/MuiMode";
import logo from "./logo.svg";
import "./App.css";
import Application from "./components/application/application";
import Skills from "./components/skills/skills";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
