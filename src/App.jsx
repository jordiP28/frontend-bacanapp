import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Ingreso from "./pages/Ingreso";
import Registro from "./pages/Registro";
import Lugares from "./pages/Lugares";
import Diversion from "./pages/Diversion";
import Restaurantes from "./pages/Restaurantes";
import Nosotros from "./pages/Nosotros";
import logo from "./assets/img/logoooo.png";
import Inicio from "./pages/Inicio";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Inicializa el estado de autenticación Cambiar esta logica para validar cuando un usuario esta autenticado

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {loading ? (
          <div className="splash-screen">
            <img src={logo} alt="Logo" className="splash-logo" />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/Inicio" />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Ingreso" element={<Ingreso />} />
            <Route path="/Registro" element={<Registro />} />
            <Route
              path="/Lugares"
              element={
                isAuthenticated ? <Lugares /> : <Navigate to="/Ingreso" />
              }
            />
            <Route
              path="/Restaurantes"
              element={
                isAuthenticated ? <Restaurantes /> : <Navigate to="/Ingreso" />
              }
            />
            <Route
              path="/Diversion"
              element={
                isAuthenticated ? <Diversion /> : <Navigate to="/Ingreso" />
              }
            />
            <Route
              path="/Nosotros"
              element={
                isAuthenticated ? <Nosotros /> : <Navigate to="/Ingreso" />
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
