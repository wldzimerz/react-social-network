import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Posts from "./components/Posts/Posts";
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";

import "./App.scss";

const App = ({ store }) => {
  return (
    <div className="app-wrapper">
      <Navigation />
      <div className="app-container">
        <Switch>
          <Route path="/profile" render={() => <Profile store={store} />} />
          <Route path="/news" render={() => <Posts />} />
          <Route path="/messages" render={() => <Messages store={store} />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
