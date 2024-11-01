import React, { useState } from "react";
import "../styles/restaurantes.css";
import encabezadoImagen from "../assets/img/bacana.png";
import restaurante1 from "../assets/img/rod.png";
import restaurante2 from "../assets/img/abajo.png";
import restaurante3 from "../assets/img/image (2).png";
import restaurante4 from "../assets/img/comida4.jpg";
import restaurante5 from "../assets/img/comida5.jpg";
import restaurante6 from "../assets/img/paloe.png";
import restaurante7 from "../assets/img/pepe.png";
import restaurante8 from "../assets/img/sensp.png";
import restaurante9 from "../assets/img/manc.png";
import restaurante10 from "../assets/img/manc.png";
import Nav from "../components/Nav";

const Restaurantes = () => {
  const [calificaciones, setCalificaciones] = useState({});

  const restaurantes = [
    {
      id: 1,
      nombre: "Restaurante Rodizio",
      descripcion:
        "Único restaurante en barranquilla donde puedes comer toda la carne que puedas con el sistema de rodizio brasilero.",
      imagen: restaurante1,
      direccion: "Restaurante Rodizio",
    },
    {
      id: 2,
      nombre: "Barrio Abajo Totumas y Parrilla",
      descripcion: "Comida típica de la región.",
      imagen: restaurante2,
      direccion: "Totumas y Parrilla, Barrio abajo- Barranquilla",
    },
    {
      id: 3,
      nombre: "Cuzco Cocina Peruana",
      descripcion:
        "Visita este restaurante y come algo si tienes hambre tras disfrutar de Parque Washington. Prueba aquí recetas de la cocina peruana.",
      imagen: restaurante3,
      direccion: "Cuzco Cocina Peruana, Barranquilla",
    },
    {
      id: 4,
      nombre: "La Parrilla",
      descripcion: "Carnes asadas y ambiente familiar.",
      imagen: restaurante4,
      direccion: "Calle de la Parrilla, Barranquilla",
    },
    {
      id: 5,
      nombre: "Restaurante SteakHouse Chez Ernest",
      descripcion: "Carnes asadas y ambiente familiar.",
      imagen: restaurante5,
      direccion: "Restaurante SteakHouse , Barranquilla",
    },
    {
      id: 6,
      nombre: "Restaurante Palo de Mango",
      descripcion:
        "Restaurante Palo de Mango está recomendado por las cocinas caribeña y colombiana que sirven. Los cocineros de este lugar se esfuerzan al máximo para dar a sus visitantes unas tiernas croquetas, un singular pulpo y un atrayente laing.",
      imagen: restaurante6,
      direccion: "Restaurante Palo de Mango, Barranquilla",
    },
    {
      id: 7,
      nombre: "Pepe Anca",
      descripcion:
        "Visita este bar y haz un intermedio para disfrutar de su casero bife de chorizo, su singular ternera a la parrilla o su atrayente solomillo",
      imagen: restaurante7,
      direccion: "Pepe Anca, Barranquilla",
    },
    {
      id: 8,
      nombre: "Senso Isakaya & Ramen Bar",
      descripcion:
        "La cocina japonesa es excelente en este restaurante. Saborea el atrayente ramen de cerdo, el tierno cerdo y el sorprendente laing que ofrece Senso Isakaya & Ramen Bar.",
      imagen: restaurante8,
      direccion: "Senso Isakaya & Ramen Bar",
    },
    {
      id: 9,
      nombre: "Mancora Cocina Fusión",
      descripcion:
        "La cocina fusión forma parte de la carta de este restaurante. No olvides tomar el tierno pulpo, el generoso ceviche o el atrayente rape de Mancora Cocina Fusión.",
      imagen: restaurante9,
      direccion: "Mancora Cocina Fusión,",
    },
    {
      id: 10,
      nombre: "Los Trigales Restaurante",
      descripcion:
        "Ven a este restaurante para degustar un tierno asado de pollo, una sabrosa parrillada o un sorprendente bife de chorizo. Este lugar es famoso por sus sensacionales michelada.",
      imagen: restaurante10,
      direccion: "Los Trigales Restaurante, Barranquilla",
    },
  ];

  const handleCalificar = (restauranteId, calificacion) => {
    setCalificaciones((prevCalificaciones) => ({
      ...prevCalificaciones,
      [restauranteId]: calificacion,
    }));
  };

  return (
    <div>
      <Nav/>
      <div className="restaurantes-container">
        <img
          src={encabezadoImagen}
          alt="Encabezado de Restaurantes"
          className="encabezado-imagen"
        />
        <h2>Restaurantes Recomendados 🍽️</h2>
        <ul className="restaurantes-list">
          {restaurantes.map((restaurante) => (
            <li key={restaurante.id} className="restaurante-item">
              <img
                src={restaurante.imagen}
                alt={restaurante.nombre}
                className="restaurante-imagen"
              />
              <div className="restaurante-descripcion">
                <h3>{restaurante.nombre}</h3>
                <p>{restaurante.descripcion}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    restaurante.direccion
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                </a>

                <div className="calificacion">
                  <h4>Califica este restaurante:</h4>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${
                        calificaciones[restaurante.id] >= star ? "filled" : ""
                      }`}
                      onClick={() => handleCalificar(restaurante.id, star)}
                    >
                      ★
                    </span>
                  ))}
                  {calificaciones[restaurante.id] && (
                    <p>
                      Calificación: {calificaciones[restaurante.id]} estrellas
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurantes;
