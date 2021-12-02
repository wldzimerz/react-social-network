import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Posts from "./components/Posts/Posts";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import CommunityContainer from "./components/Community/CommunityContainer";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import LoginForm from "./components/LoginForm/LoginForm";

import "./App.scss";
import PrivateRoute from "./components/common/PrivateRoute/PrivateRoute";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <NavigationContainer />
        <div className="app-container">
          <Switch>
            <PrivateRoute path="/profile/:userId?" component={ProfileContainer} />
            <Route path="/news" render={() => <Posts />} />
            <PrivateRoute path="/messages" component={MessagesContainer} />
            <Route path="/login" render={() => <LoginForm />} />
            <Route path="/community" render={() => <CommunityContainer />} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
};

export default App;
