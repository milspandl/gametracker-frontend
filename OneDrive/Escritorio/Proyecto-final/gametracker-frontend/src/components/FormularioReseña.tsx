import axios from "axios";
import { useState } from "react";

const API_URL = "https://gametracker-backend-1.onrender.com/api";

// Por ahora el juegoId queda fijo (después lo conectamos a cada tarjeta)
const DEFAULT_GAME_ID = "1234567890";

export default function FormularioReseña({ recargar }: any) {
  const [data, setData] = useState({
    texto: "",
    estrellas: 5,
    juegoId: DEFAULT_GAME_ID
  });

  const enviar = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/reviews`, data);

      // limpiar
      setData({
        texto: "",
        estrellas: 5,
        juegoId: DEFAULT_GAME_ID
      });

      if (recargar) recargar();

    } catch (e) {
      console.error(e);
      alert("Error al enviar reseña");
    }
  };

  return (
    <form onSubmit={enviar} className="review-form">
      <input
        placeholder="Escribir reseña..."
        value={data.texto}
        onChange={e => setData({ ...data, texto: e.target.value })}
        className="review-input"
      />

      <input
        type="number"
        min={1}
        max={5}
        value={data.estrellas}
        onChange={e => setData({ ...data, estrellas: Number(e.target.value) })}
        className="review-stars-input"
      />

      <button className="btn" type="submit">Enviar</button>
    </form>
  );
}
