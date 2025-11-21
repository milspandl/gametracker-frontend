import axios from "axios";

const API_URL = "https://gametracker-backend-1.onrender.com/api";

const placeholder = (title: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(title || "game")}/400/560`;

export default function TarjetaJuego({ juego, recargar }: any) {

  const eliminar = async () => {
    if (!confirm("¿Eliminar este juego?")) return;

    try {
      await axios.delete(`${API_URL}/games/${juego._id}`);
      recargar();
    } catch (e) {
      console.error(e);
      alert("Error eliminando el juego");
    }
  };

  return (
    <article className="card game-card">

      <img
        className="game-cover"
        src={juego.portada || placeholder(juego.titulo)}
        alt={juego.titulo}
      />

      <div className="card-body">
        <h4 className="card-title">{juego.titulo}</h4>

        <div className="card-meta">
          <span className="genre">{juego.genero || "Sin género"}</span>
          <span className="stars">
            {juego.puntuacion ? `${juego.puntuacion}★` : "—"}
          </span>
        </div>

        <div className="game-actions">
          <button className="btn-edit" onClick={() => alert("Función editar pronto ☺")}>Editar</button>
          <button className="btn-delete" onClick={eliminar}>Eliminar</button>
        </div>
      </div>

    </article>
  );
}
