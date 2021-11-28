import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Posts from "./components/Posts/Posts";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import CommunityContainer from "./components/Community/CommunityContainer";
import NavigationContainer from "./components/Navigation/NavigationContainer";

import "./App.scss";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <NavigationContainer />
        <div className="app-container">
          <Switch>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/news" render={() => <Posts />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
            <Route path="/community" render={() => <CommunityContainer />} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
};

export default App;
