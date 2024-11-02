import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../styles/ingreso.css';
import logo2 from '../assets/img/logo2.PNG';
import { login } from '../services/authService'; // Importa el servicio de autenticación

const Ingreso = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reinicia el error en cada intento

    try {
      const userData = await login(username, password);
      console.log('Usuario autenticado:', userData);
      onLogin(); // Actualiza el estado de autenticación
      navigate('/Lugares'); // Redirige al usuario
    } catch (err) {
      setError('Error en la autenticación. Verifica tus credenciales.');
    }
  };

  return (
    <div className="login-container">
      <img src={logo2} alt="Cabecera de Ingreso" className="header-image" />
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className='login-container-box'>
          <label htmlFor="username">Nombre de Usuario</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className='login-container-box'>
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/Registro">¡Regístrate aquí!</Link>
      </p>
    </div>
  );
};

export default Ingreso;
