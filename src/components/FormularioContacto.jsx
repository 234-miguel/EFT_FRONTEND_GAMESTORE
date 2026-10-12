
import { useState } from "react";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [resultado, setResultado] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();

    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setResultado("Error: debes completar todos los campos.");
      return;
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoValido.test(email)) {
      setResultado("Error: ingresa un correo válido.");
      return;
    }

    setResultado("Formulario validado correctamente.");

    setNombre("");
    setEmail("");
    setMensaje("");
  }

  return (
    <form
      onSubmit={enviarFormulario}
      className="formulario-contacto mx-auto"
    >
      <div className="mb-3">
        <label htmlFor="nombreContacto" className="form-label">
          Nombre
        </label>
        <input
          id="nombreContacto"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="emailContacto" className="form-label">
          Correo electrónico
        </label>
        <input
          id="emailContacto"
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="mensajeContacto" className="form-label">
          Mensaje
        </label>
        <textarea
          id="mensajeContacto"
          className="form-control"
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Enviar mensaje
      </button>

      {resultado && (
        <div className="alert alert-info mt-3" role="status">
          {resultado}
        </div>
      )}
    </form>
  );
}

export default FormularioContacto;
