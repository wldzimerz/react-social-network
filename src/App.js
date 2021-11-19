import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navigation from "./components/Navigation/Navigation";
import Posts from "./components/Posts/Posts";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";

import "./App.scss";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Navigation />
        <div className="app-container">
          <Switch>
            <Route path="/profile" render={() => <ProfileContainer />} />
            <Route path="/news" render={() => <Posts />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
};

export default App;
