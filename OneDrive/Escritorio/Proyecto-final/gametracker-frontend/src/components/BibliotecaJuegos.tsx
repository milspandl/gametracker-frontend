import axios from "axios";
import { useEffect, useState } from "react";
import TarjetaJuego from "./TarjetaJuego";
import FormularioJuego from "./FormularioJuego";

export default function BibliotecaJuegos(){
  const [juegos, setJuegos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const cargar = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/games");
      setJuegos(res.data || []);
    } catch (e) {
      console.error("Error cargando juegos", e);
      setJuegos([]);
    } finally { setLoading(false); }
  };

  useEffect(()=>{ cargar(); }, []);

  return (
    <section>
      <div className="section-title">
        <h3>Biblioteca</h3>
        <div>
          <FormularioJuego recargar={cargar} inline />
        </div>
      </div>

      {loading ? (
        <div className="empty">Cargando juegos...</div>
      ) : juegos.length === 0 ? (
        <div className="empty">
          <strong>No hay juegos aún</strong>
          <div style={{marginTop:8}}>Agregá tu primer juego usando el formulario</div>
        </div>
      ) : (
        <div className="grid">
          {juegos.map((j:any)=>(
            <TarjetaJuego key={j._id} juego={j} recargar={cargar} />
          ))}
        </div>
      )}
    </section>
  );
}
