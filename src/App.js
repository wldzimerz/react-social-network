import { Switch, Route } from "react-router-dom";

import storeContext from "./components/context/storeContext";
import Navigation from "./components/Navigation/Navigation";
import Posts from "./components/Posts/Posts";
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";

import "./App.scss";

const App = ({ store }) => {
  return (
    <storeContext.Provider value={store}>
      <div className="app-wrapper">
        <Navigation />
        <div className="app-container">
          <Switch>
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/news" render={() => <Posts />} />
            <Route path="/messages" render={() => <Messages />} />
          </Switch>
        </div>
      </div>
    </storeContext.Provider>
  );
};

export default App;
