import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.js";
import Posts from "./components/Posts/Posts.js";
import Messages from "./components/Messages/Messages";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/news" exact component={Posts} />
            <Route path="/messages" component={Messages} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
