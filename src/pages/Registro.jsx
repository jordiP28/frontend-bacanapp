import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegar
import '../styles/registro.css'; // Importa los estilos
import logo2 from '../assets/img/logo2.PNG'; // Asegúrate de que la ruta sea correcta

const Register = () => {
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombres:', nombres);
    console.log('Correo:', correo);
    console.log('Celular:', celular);
    console.log('Contraseña:', contraseña);
    // Aquí puedes agregar la lógica para registrar al usuario
  };

  return (
    <div className="registro-container">
      <img src={logo2} alt="Logo de Registro" className="header-image" />
      <form onSubmit={handleSubmit}>
        <div className='registro-container-box'>
          <label htmlFor="nombres">Nombres</label>
          <input 
            type="text" 
            id="nombres" 
            value={nombres} 
            onChange={(e) => setNombres(e.target.value)} 
            required 
          />
        </div>
        <div className='registro-container-box'>
          <label htmlFor="correo">Correo</label>
          <input 
            type="email" 
            id="correo" 
            value={correo} 
            onChange={(e) => setCorreo(e.target.value)} 
            required 
          />
        </div>
        <div className='registro-container-box'>
          <label htmlFor="celular">Celular</label>
          <input 
            type="tel" 
            id="celular" 
            value={celular} 
            onChange={(e) => setCelular(e.target.value)} 
            required 
          />
        </div>
        <div className='registro-container-box'>
          <label htmlFor="contraseña">Contraseña</label>
          <input 
            type="password" 
            id="contraseña" 
            value={contraseña} 
            onChange={(e) => setContraseña(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/Ingreso">Inicia sesión aquí</Link>
      </p>
    </div>
  );
};

export default Register;
