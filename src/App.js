import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
