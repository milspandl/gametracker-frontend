import axios from "axios";
import { useEffect, useState } from "react";
import FormularioReseña from "./FormularioReseña";

const API_URL = "https://gametracker-backend-1.onrender.com/api";

// ID HARDCODEADO TEMPORALMENTE
const USER_ID = "1234567890";

export default function ListaReseñas() {
  const [reseñas, setReseñas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const cargar = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/reviews/${USER_ID}`);
      setReseñas(res.data || []);
    } catch (e) {
      console.error("Error cargando reseñas", e);
      setReseñas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <div className="card-compact">
      <h4 className="section-subtitle">Reseñas recientes</h4>

      <FormularioReseña recargar={cargar} />

      <div style={{ marginTop: 10 }}>
        {loading ? (
          <div className="muted small">Cargando reseñas…</div>
        ) : reseñas.length === 0 ? (
          <div className="muted small">No hay reseñas aún</div>
        ) : (
          reseñas.slice(0, 5).map((r) => (
            <div key={r._id} className="review-item">
              <strong className="review-stars">{r.estrellas}★</strong>
              <p className="review-text">{r.texto}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
