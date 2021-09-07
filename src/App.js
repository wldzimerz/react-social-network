// import logo from "./logo.svg";
import "./App.css";
// import Technologies from "./Technologies";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Posts />
    </div>
  );
}

export default App;
