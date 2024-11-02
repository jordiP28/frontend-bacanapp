const API_URL = 'http://localhost:5000'; // Reemplaza con tu URL de API

export const login = async (correo, contraseña) => { // Cambia username a correo
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ correo, contraseña }), // Envía correo y contraseña
    });

    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }

    const data = await response.json();
    return data; // Aquí puedes retornar el token o información del usuario
  } catch (error) {
    console.error('Error en la autenticación:', error);
    throw error; // Propaga el error para manejarlo en el componente
  }
};

export const register = async (nombres, correo, celular, contraseña) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombres, correo, celular, contraseña }),
    });

    if (!response.ok) {
      throw new Error('Error al registrar al usuario');
    }

    const data = await response.json();
    return data; // Aquí puedes retornar información relevante
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error; // Propaga el error para manejarlo en el componente
  }
};
