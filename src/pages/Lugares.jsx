import React, { useState } from "react";
import "../styles/lugares.css";
import encabezadoImagen from "../assets/img/bacana.png";
import atarde from "../assets/img/caimanderrio.jpg";
import azul from "../assets/img/Intendeciafluvial.png";
import rio from "../assets/img/malecon.png";
import tour from "../assets/img/prado.jpg";
import aleta from "../assets/img/aleta de tiburon.jpg";
import ventana from "../assets/img/ventana.jpg";
import castillo from "../assets/img/salgar.png";
import faro from "../assets/img/faro.png";
import kili from "../assets/img/kili.png";
import usi from "../assets/img/usia.png";
import muelle from "../assets/img/muelle.png";
import museo from "../assets/img/casaca.png";
import Nav from "../components/Nav";

const Lugares = () => {
  const [calificaciones, setCalificaciones] = useState({});

  const lugares = [
    {
      id: 1,
      nombre: "Malecon del río",
      descripcion: "Un hermoso destino al norte de la ciudad.",
      imagen: atarde,
      direccion: "Malecon del río, Barranquilla",
    },
    {
      id: 2,
      nombre: "Intendencia Fluvial",
      descripcion: "Ubicado en un brazo del río.",
      imagen: azul,
      direccion: "Intendencia Fluvial, Barranquilla",
    },
    {
      id: 3,
      nombre: "Ciénaga de Mallorquín",
      descripcion:
        "Imperdible nuestro paseo en lancha por el río y ciénaga de Mallorquín.",
      imagen: rio,
      direccion: "Ciénaga de Mallorquín, Barranquilla",
    },
    {
      id: 4,
      nombre: "Tour por la ciudad",
      descripcion:
        "Imperdible nuestro paseo en lancha por el río y ciénaga de Mallorquín.",
      imagen: tour,
      direccion: "Hotel del Prado, Barranquilla",
    },
    {
      id: 5,
      nombre: "Aleta de Tiburón",
      descripcion: "Un homenaje a nuestro Junior de barranquilla",
      imagen: aleta,
      direccion: "Aleta del tiburon Barranquilla",
    },
    {
      id: 6,
      nombre: "Ventana del mundo",
      descripcion: "Un homenaje a nuestro Junior de barranquilla",
      imagen: ventana,
      direccion: "Ventana de sueños, puerto colombia",
    },
    {
      id: 7,
      nombre: "Castillo de salgar",
      descripcion: "Un homenaje a nuestro Junior de barranquilla",
      imagen: castillo,
      direccion: "Castillo de salgar",
    },
    {
      id: 8,
      nombre: "Faro de sueños",
      descripcion: "Un homenaje a nuestro Junior de barranquilla",
      imagen: faro,
      direccion: "Muelle, Puerto Colombia",
    },
    {
      id: 9,
      nombre: "Kilimandario",
      descripcion: "Un homenaje a nuestro Junior de barranquilla",
      imagen: kili,
      direccion: "Kilimandario, Puerto Colombia",
    },
    {
      id: 10,
      nombre: "Usiacuri",
      descripcion: "Un homenaje a nuestro Junior de barranquilla",
      imagen: usi,
      direccion: "Iglesia de Usiacuri, Atlatico",
    },
    {
      id: 11,
      nombre: "Muelle de Puerto Colombia",
      descripcion: "Un homenaje a nuestro Junior de barranquilla",
      imagen: muelle,
      direccion: "Muelle de Puerto Colombia, Atlatico",
    },
    {
      id: 12,
      nombre: "Museo del carnaval",
      descripcion: "Un homenaje a nuestro Junior de barranquilla",
      imagen: museo,
      direccion: "Muelle de Puerto Colombia, Atlatico",
    },
  ];

  const handleCalificar = (lugarId, calificacion) => {
    setCalificaciones((prevCalificaciones) => ({
      ...prevCalificaciones,
      [lugarId]: calificacion,
    }));
  };

  return (
    <div>
      <Nav/>
      <div className="lugares-container">
        <img
          src={encabezadoImagen}
          alt="Encabezado de Restaurantes"
          className="encabezado-imagen"
        />
        <h2>Lugares de Interés 🗺️</h2>
        <ul className="lugares-list">
          {lugares.map((lugar) => (
            <li key={lugar.id} className="lugar-item">
              <img
                src={lugar.imagen}
                alt={lugar.nombre}
                className="lugar-imagen"
              />
              <div className="lugar-descripcion">
                <h3>{lugar.nombre}</h3>
                <p>{lugar.descripcion}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    lugar.direccion
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                </a>

                <div className="calificacion">
                  <h4>Califica este lugar:</h4>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${
                        calificaciones[lugar.id] >= star ? "filled" : ""
                      }`}
                      onClick={() => handleCalificar(lugar.id, star)}
                    >
                      ★
                    </span>
                  ))}
                  {calificaciones[lugar.id] && (
                    <p>Calificación: {calificaciones[lugar.id]} estrellas</p>
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

export default Lugares;
