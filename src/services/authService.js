const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Registro de usuario
exports.registerUser = async (username, password) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('El nombre de usuario ya está en uso');
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  
  return { message: 'Usuario registrado con éxito' };
};

// Login de usuario
exports.loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Credenciales inválidas');
  }
  
  return { message: 'Login exitoso' };
};
