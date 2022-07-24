import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route
            path="/detail/:id"
            caseSensitive={false}
            element={<Detail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
