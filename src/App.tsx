//importing dependences
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//importing project components
import Contacts from "./components/Contacts";
import Deals from "./components/Deals";

//importing styles
import "./styles/antd.css";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Contacts/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/deals" element={<Deals/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;