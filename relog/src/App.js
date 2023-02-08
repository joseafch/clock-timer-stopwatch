import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Home from "./pagues/Home/Home";
import Cronometro from "./pagues/Cronometro/Cronometro";
import Temporalizador from "./pagues/Temporizador/Temporizador";
import Header from "./Cronometro/Header/Header";
import HomePague from "./pagues/Home/Home";
function App() {
  return (
    <div className="Back-Groun">
      <Router>
      <Header></Header>
      <div className="position-time">
        <Routes>
          <Route path="/" element={<HomePague></HomePague>}/>
          <Route path="/Cronometro" element={<Cronometro></Cronometro>}/>
          <Route path="/Temporalizador" element={<Temporalizador></Temporalizador>}/>
        </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
