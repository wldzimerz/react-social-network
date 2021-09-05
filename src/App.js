// import logo from "./logo.svg";
import "./App.css";
// import Technologies from "./Technologies";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Navigation />
      <Posts />
    </div>
  );
}

export default App;
