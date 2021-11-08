import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Posts from "./components/Posts/Posts";
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";

import "./App.scss";

const App = ({ appStore }) => {
  return (
    <div className="app-wrapper">
      <Navigation />
      <div className="app-container">
        <Switch>
          <Route path="/profile" render={() => <Profile POSTDATA={appStore.POSTDATA} USERINFO={appStore.USERINFO} />} />
          <Route path="/news" render={() => <Posts />} />
          <Route path="/messages" render={() => <Messages MESSAGES={appStore.MESSAGES} USERS={appStore.USERS} />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
