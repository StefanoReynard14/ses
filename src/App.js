import './App.css';
import Listadovichz from './componentes/listadovich';
import Crear from './componentes/crear';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <a className="nav-item nav-link active" href="/">Sistema <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/crear">Ingresar Vehículo</a>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Listadovichz />}></Route>
          <Route path="/crear" element={<Crear />} ></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
