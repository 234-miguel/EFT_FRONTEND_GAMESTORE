

import { useState } from "react";

import ListaVideojuegos from "./components/ListaVideojuegos";
import FormularioContacto from "./components/FormularioContacto";
import "./App.css";

// Datos iniciales de los videojuegos

const juegosIniciales = [

  {

    id: 1,

    nombre: "Minecraft",

    categoria: "Aventura",

    precio: 24990,

    descripcion: "Construye y explora mundos increíbles.",

    imagen: "https://placehold.co/600x400/198754/ffffff?text=Minecraft"

  },

  {

    id: 2,

    nombre: "EA Sports FC 26",

    categoria: "Deportes",

    precio: 59990,

    descripcion: "Disfruta partidos con tus equipos favoritos.",

    imagen: "https://placehold.co/600x400/0d6efd/ffffff?text=FC+26"

  },

  {

    id: 3,

    nombre: "GTA V",

    categoria: "Acción",

    precio: 29990,

    descripcion: "Explora una ciudad llena de misiones.",

    imagen: "https://placehold.co/600x400/dc3545/ffffff?text=GTA+V"

  },

  {

    id: 4,

    nombre: "Forza Horizon 5",

    categoria: "Carreras",

    precio: 39990,

    descripcion: "Compite con increíbles autos deportivos.",

    imagen: "https://placehold.co/600x400/f59e0b/ffffff?text=Forza+Horizon+5"

  }

];

// Componente principal

function App() {

  const [videojuegos, setVideojuegos] = useState(juegosIniciales);

  const [categoria, setCategoria] = useState("Todas");

  const [nombreNuevo, setNombreNuevo] = useState("");

  const [precioNuevo, setPrecioNuevo] = useState("");

  const [descripcionNueva, setDescripcionNueva] = useState("");

  const [categoriaNueva, setCategoriaNueva] = useState("Acción");

  const juegosFiltrados =

    categoria === "Todas"

      ? videojuegos

      : videojuegos.filter(juego => juego.categoria === categoria);

  function eliminarVideojuego(id) {

    setVideojuegos(actuales =>

      actuales.filter(juego => juego.id !== id)

    );

  }

  function agregarVideojuego(e) {

    e.preventDefault();

    if (

      !nombreNuevo.trim() ||

      !descripcionNueva.trim() ||

      Number(precioNuevo) <= 0

    ) {

      alert("Completa correctamente todos los datos.");

      return;

    }

    const nuevo = {

      id: Date.now(),

      nombre: nombreNuevo.trim(),

      precio: Number(precioNuevo),

      categoria: categoriaNueva,

      descripcion: descripcionNueva.trim(),

      imagen:

        "https://placehold.co/600x400/343a40/ffffff?text=" +

        encodeURIComponent(nombreNuevo.trim())

    };

    setVideojuegos(actuales => [...actuales, nuevo]);

    setNombreNuevo("");

    setPrecioNuevo("");

    setDescripcionNueva("");

    setCategoria("Todas");

  }

  return (

    <>

      <header>

        <nav className="navbar navbar-dark bg-dark">

          <div className="container">

            <a className="navbar-brand fw-bold" href="#inicio">

              🎮 GameStore

            </a>

            <div className="d-flex flex-wrap gap-3">

              <a className="text-white" href="#inicio">Inicio</a>

              <a className="text-white" href="#videojuegos">Videojuegos</a>

              <a className="text-white" href="#contacto">Contacto</a>

            </div>

          </div>

        </nav>

      </header>

      <main>

        <section id="inicio" className="hero text-center text-white py-5">

          <div className="container">

            <h1 className="fw-bold">Bienvenido a GameStore</h1>

            <p className="lead">

              Encuentra tus videojuegos favoritos al mejor precio.

            </p>

            <a href="#videojuegos" className="btn btn-warning">

              Ver videojuegos

            </a>

          </div>

        </section>

        <section id="videojuegos" className="container py-5">

          <h2 className="text-center mb-4">Nuestros videojuegos</h2>

          <label htmlFor="categoria" className="form-label">

            Filtrar por categoría

          </label>

          <select

            id="categoria"

            className="form-select mb-4"

            value={categoria}

            onChange={e => setCategoria(e.target.value)}

          >

            <option value="Todas">Todas</option>

            <option value="Acción">Acción</option>

            <option value="Aventura">Aventura</option>

            <option value="Deportes">Deportes</option>

            <option value="Carreras">Carreras</option>

          </select>

          <ListaVideojuegos

            juegos={juegosFiltrados}

            eliminar={eliminarVideojuego}

          />

        </section>

        <section className="container pb-5">

          <h2 className="text-center mb-4">Agregar videojuego</h2>

          <form onSubmit={agregarVideojuego} className="row g-3">

            <div className="col-md-6">

              <label className="form-label">Nombre</label>

              <input

                className="form-control"

                value={nombreNuevo}

                onChange={e => setNombreNuevo(e.target.value)}

                required

              />

            </div>

            <div className="col-md-3">

              <label className="form-label">Precio</label>

              <input

                type="number"

                min="1"

                className="form-control"

                value={precioNuevo}

                onChange={e => setPrecioNuevo(e.target.value)}

                required

              />

            </div>

            <div className="col-md-3">

              <label className="form-label">Categoría</label>

              <select

                className="form-select"

                value={categoriaNueva}

                onChange={e => setCategoriaNueva(e.target.value)}

              >

                <option>Acción</option>

                <option>Aventura</option>

                <option>Deportes</option>

                <option>Carreras</option>

              </select>

            </div>

            <div className="col-12">

              <label className="form-label">Descripción</label>

              <textarea

                className="form-control"

                value={descripcionNueva}

                onChange={e => setDescripcionNueva(e.target.value)}

                required

              />

            </div>

            <div className="col-12">

              <button className="btn btn-success" type="submit">

                Agregar videojuego

              </button>

            </div>

          </form>

        </section>

        <section id="contacto" className="contacto py-5">

          <div className="container">

            <h2 className="text-center mb-4">Contáctanos</h2>

            <FormularioContacto />

          </div>

        </section>

      </main>

      <footer className="bg-dark text-white text-center py-3">

        © 2026 GameStore - Tienda de videojuegos

      </footer>

    </>

  );

}

export default App;
