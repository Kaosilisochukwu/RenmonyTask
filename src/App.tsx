import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/pay">
            <FormPage />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <WelcomePage />
    // </div>
  );
}

export default App;
