import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { ThemeProvider } from "@mui/styles";
import theme from "./global-settings/theme-config";
import { ActionMenu } from "./component/menu/model/menu-model";

function App() {
  return (
    <ThemeProvider theme={theme({ activeTheme: ActionMenu.LightTheme})}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
