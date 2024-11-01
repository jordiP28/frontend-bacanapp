import React from "react";
import "../styles/diversion.css";
import encabezadoImagen from "../assets/img/bacana.png";
import emb from "../assets/img/embar2.png";
import embar from "../assets/img/emba3.png";
import caracali from "../assets/img/caracali.png";
import zoo from "../assets/img/zoo.png";
import chiva from "../assets/img/chiva.png";
import turi from "../assets/img/turipa.png";
import mono from "../assets/img/mono.png";
import Nav from "../components/Nav";

const Diversion = () => {
  const diversiones = [
    {
      id: 2,
      nombre: "Vive el turismo de naturaleza",
      descripcion:
        "Emprende un verdadero viaje al interior del Parque Isla Salamanca con la asociación de pescadores de almejas que gracias al Proyecto Desarrollo Local Sostenible de Parques Nacionales de Colombia y financiado por la Unión Europea cambiaron su actividad económica de la caza de la almeja por el ecoturismo y el fomento de su cultura fluvial. Conctato 324354545 ",
      imagen: emb,
    },
    {
      id: 3,
      nombre: "Visita al santuario Animal de Barranquilla",
      descripcion:
        "Fundado en 1953, el Zoológico de  Barranquilla cuenta con 168 Mamíferos, 252 Aves, 11 Peces, 128 Reptiles, 5 Anfibios y 12 Invertebrados en los cerca de 20.000 metros cuadrados que lo componen, en los que encierra una gran riqueza natural y una gran variedad no solo de animales, sino de plantas.",
      imagen: zoo,
    },
    {
      id: 4,
      nombre: "Un estilo de vida al río",
      descripcion:
        "La experiencia que se vive con TAQ SAS es con un estilo de vida local como parte de una agenda permanente en la ciudad. Las rutas que manejan van de acuerdo a las peticiones de los pasajeros manteniendo el margen del Río. Contacto 345489209323",
      imagen: embar,
    },
    {
      id: 5,
      nombre: "Paseo por el rio, en el KaraKali",
      descripcion:
        "La experiencia que se vive con TAQ SAS es con un estilo de vida local como parte de una agenda permanente en la ciudad. Las rutas que manejan van de acuerdo a las peticiones de los pasajeros manteniendo el margen del Río. Contacto 345489209323",
      imagen: caracali,
    },
    {
      id: 6,
      nombre: "Paseo por el rio, en el KaraKali",
      descripcion:
        "La experiencia que se vive con TAQ SAS es con un estilo de vida local como parte de una agenda permanente en la ciudad. Las rutas que manejan van de acuerdo a las peticiones de los pasajeros manteniendo el margen del Río. Contacto 345489209323",
      imagen: chiva,
    },
    {
      id: 7,
      nombre: "Paseo por el rio, en el KaraKali",
      descripcion:
        "La experiencia que se vive con TAQ SAS es con un estilo de vida local como parte de una agenda permanente en la ciudad. Las rutas que manejan van de acuerdo a las peticiones de los pasajeros manteniendo el margen del Río. Contacto 345489209323",
      imagen: turi,
    },
    {
      id: 8,
      nombre: "Paseo por el rio, en el KaraKali",
      descripcion:
        "La experiencia que se vive con TAQ SAS es con un estilo de vida local como parte de una agenda permanente en la ciudad. Las rutas que manejan van de acuerdo a las peticiones de los pasajeros manteniendo el margen del Río. Contacto 345489209323",
      imagen: mono,
    },
  ];

  return (
    <div>
      <Nav/>
      <div className="diversion-container">
        <img
          src={encabezadoImagen}
          alt="Encabezado de Restaurantes"
          className="encabezado-imagen"
        />
        <h2>Diversión 🎉</h2>
        <ul className="diversion-list">
          {diversiones.map((diversion) => (
            <li key={diversion.id} className="diversion-item">
              <img
                src={diversion.imagen}
                alt={diversion.nombre}
                className="diversion-imagen"
              />
              <div className="diversion-descripcion">
                <h3>{diversion.nombre}</h3>
                <p>{diversion.descripcion}</p>
                {/* Aquí podrías añadir un sistema de calificación */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Diversion;
