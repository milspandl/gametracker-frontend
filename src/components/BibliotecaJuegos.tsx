import axios from "axios";
import { useEffect, useState } from "react";
import TarjetaJuego from "./TarjetaJuego";
import FormularioJuego from "./FormularioJuego";

const API_URL = "https://gametracker-backend-1.onrender.com/api";

export default function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const cargar = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/games`);
      setJuegos(res.data || []);
    } catch (e) {
      console.error("Error cargando juegos", e);
      setJuegos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <section>
      <div className="section-title">
        <h3>Mi Biblioteca</h3>

        <div>
          <FormularioJuego recargar={cargar} />
        </div>
      </div>

      {loading ? (
        <div className="empty">Cargando juegos…</div>
      ) : juegos.length === 0 ? (
        <div className="empty">
          <strong>No tienes juegos aún</strong>
          <p style={{ marginTop: 8 }}>
            Agregá tu primer juego usando el botón “Agregar”
          </p>
        </div>
      ) : (
        <div className="grid">
          {juegos.map((j: any) => (
            <TarjetaJuego key={j._id} juego={j} recargar={cargar} />
          ))}
        </div>
      )}
    </section>
  );
}
