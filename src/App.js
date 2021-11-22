import Navbar from "./components/nav/Navbar";
import Home from "./components/pages/Home";
import Cv from "./components/pages/Cv";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="/Contact" element={<Contact />} />
        <Route component={Error} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
