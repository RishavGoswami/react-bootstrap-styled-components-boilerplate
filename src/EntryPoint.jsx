import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App wrapper
import { AppContainer } from "./components/common/app-container/AppContainer";

// Components
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { Service } from "./components/service";
import { NoMatch } from "./components/no-match";

import { NavigationBar } from "./components/common/navigation-bar/NavigationBar";
import { Jumbotron } from "./components/common/jumbotron/Jumbotron";

function EntryPoint() {
  return (
    <>
      <NavigationBar />
      <Jumbotron />
      <AppContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service" component={Service} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </AppContainer>
    </>
  );
}

export default EntryPoint;
