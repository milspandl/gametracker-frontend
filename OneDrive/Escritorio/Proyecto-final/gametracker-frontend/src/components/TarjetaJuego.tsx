import axios from "axios";

const placeholder = (title:string) =>
  `https://picsum.photos/seed/${encodeURIComponent(title || "game")}/400/560`;

export default function TarjetaJuego({ juego, recargar }: any) {
  const eliminar = async () => {
    if (!confirm("¿Eliminar este juego?")) return;
    try {
      await axios.delete(`http://localhost:4000/api/games/${juego._id}`);
      recargar();
    } catch (e) {
      console.error(e);
      alert("Ocurrió un error al eliminar");
    }
  };

  return (
    <article className="card">
      <img src={juego.portada || placeholder(juego.titulo)} alt={juego.titulo} />
      <div className="card-body">
        <h4 className="card-title">{juego.titulo}</h4>
        <div className="card-meta">
          <span>{juego.genero || "—"}</span>
          <span className="stars">{juego.puntuacion ? `${juego.puntuacion}★` : "—"}</span>
        </div>
        <div style={{marginTop:10, display:"flex", gap:8}}>
          <button className="btn" onClick={()=> alert("Función editar (opcional)")} >Editar</button>
          <button style={{background:"transparent", color:"var(--muted)", border:"none", cursor:"pointer"}} onClick={eliminar}>Eliminar</button>
        </div>
      </div>
    </article>
  );
}
