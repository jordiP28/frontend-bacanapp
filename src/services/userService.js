const User = require('../models/userModel');

// Obtener todos los usuarios
exports.getAllUsers = async () => {
  const users = await User.find({}, { password: 0 }); // Excluir la contraseña
  return users;
};
