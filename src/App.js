
// import { useAuth } from "./Components/Context/UserContext";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {

  // const {user} = useAuth();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />        
        </Routes>
      </Router>
    </div>
  );
}
