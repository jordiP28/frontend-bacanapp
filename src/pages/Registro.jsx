import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/registro.css';
import logo2 from '../assets/img/logo2.PNG';
import { register } from '../services/authService'; // Importa el servicio de registro

const Register = () => {
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(''); // Para manejar errores

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reinicia el error en cada intento

    try {
      const userData = await register(nombres, correo, celular, contraseña);
      console.log('Usuario registrado:', userData);
      // Aquí puedes redirigir al usuario a la página de inicio de sesión o manejar el estado
    } catch (err) {
      setError('Error en el registro. Verifica tus datos.');
    }
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
        {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/Ingreso">Inicia sesión aquí</Link>
      </p>
    </div>
  );
};

export default Register;
