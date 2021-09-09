// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.js";
import Navigation from "./components/Navigation/Navigation.js";
import Posts from "./components/Posts/Posts.js";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Posts />
    </div>
  );
};

export default App;
