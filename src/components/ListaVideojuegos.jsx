
import VideojuegoCard from "./VideojuegoCard";

function ListaVideojuegos({ juegos, eliminar }) {
  return (
    <div className="row">
      {juegos.length === 0 ? (
        <p className="text-center">
          No hay videojuegos en esta categoría.
        </p>
      ) : (
        juegos.map((juego) => (
          <VideojuegoCard
            key={juego.id}
            juego={juego}
            eliminar={eliminar}
          />
        ))
      )}
    </div>
  );
}

export default ListaVideojuegos;
