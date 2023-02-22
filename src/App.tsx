import "./App.css";
import "./assets/css/main.scss";
import Main from "./components/main/Main.component";

function App() {
  return (
    <div className="App is-preload">
      <div id="wrapper">
        <div id="bg"></div>
        <div id="overlay"></div>
        <Main />
      </div>
    </div>
  );
}

export default App;
