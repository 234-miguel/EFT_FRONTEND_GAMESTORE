
function VideojuegoCard({ juego, eliminar }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <article className="card h-100 shadow-sm">
        <img
          src={juego.imagen}
          alt={juego.nombre}
          className="card-img-top"
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{juego.nombre}</h5>

          <p className="card-text">{juego.descripcion}</p>

          <p className="text-muted">{juego.categoria}</p>

          <h5 className="text-primary mt-auto">
            ${juego.precio.toLocaleString("es-CL")}
          </h5>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => eliminar(juego.id)}
          >
            Eliminar videojuego
          </button>
        </div>
      </article>
    </div>
  );
}

export default VideojuegoCard;
