import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.js";
import Posts from "./components/Posts/Posts.js";
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile.js";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navigation />
        <div className="app-container">
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/news" component={Posts} />
            <Route path="/messages" component={Messages} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
