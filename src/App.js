import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Posts from "./components/Posts/Posts";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import CommunityContainer from "./components/Community/CommunityContainer";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./hoc/PrivateRoute/PrivateRoute";

import "./App.scss";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <NavigationContainer />
        <div className="app-container">
          <Routes>
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <ProfileContainer />
                </PrivateRoute>
              }
            >
              <Route path=":id" element={<ProfileContainer />} />
            </Route>
            <Route path="/news" element={<Posts />} />
            <Route
              path="/messages"
              element={
                <PrivateRoute>
                  <MessagesContainer />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/community" element={<CommunityContainer />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </Provider>
  );
};

export default App;
