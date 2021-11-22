import Navbar from "./components/nav/Navbar";
import Home from "./components/pages/Home";
import Cv from "./components/pages/Cv";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import "./index.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar />
      </header>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="Cv" component={Cv} />
        <Route path="/Contact" component={Contact} />

        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
