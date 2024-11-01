import React from "react";
import { useNavigate } from "react-router-dom";
import invitadoImg from "../assets/img/marimonda.png";
import "../styles/inicio.css";
const Inicio = () => {
  const navigate = useNavigate();

  const handleInvitado = () => {
    navigate("/Lugares");
  };

  const handleIniciarSesion = () => {
    navigate("/Ingreso");
  };

  return (
    <div>
      <div className="inicio-container">
        <img src={invitadoImg} alt="Invitado" className="button-image" />
        <div className="button-container">
          <div className="button-wrapper">
            <button onClick={handleInvitado}>Seguir como invitado</button>
          </div>
          <div className="button-wrapper">
            <button onClick={handleIniciarSesion}>Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
