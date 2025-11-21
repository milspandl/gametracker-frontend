import axios from "axios";
import { useState } from "react";

const API_URL = "https://gametracker-backend-1.onrender.com/api";

export default function FormularioJuego({ recargar, inline }: any) {
  const [data, setData] = useState({
    titulo: "",
    genero: "",
    portada: "",
    horasJugadas: 0,
    puntuacion: 0
  });

  const enviar = async (e?: any) => {
    if (e) e.preventDefault();

    try {
      await axios.post(`${API_URL}/games`, data);

      // resetear formulario
      setData({
        titulo: "",
        genero: "",
        portada: "",
        horasJugadas: 0,
        puntuacion: 0
      });

      if (recargar) recargar();

    } catch (err) {
      console.error(err);
      alert("Error al agregar juego");
    }
  };


  // Estilo compacto 
  if (inline) {
    return (
      <form onSubmit={enviar} className="form form-inline">
        <input
          placeholder="Título"
          value={data.titulo}
          onChange={e => setData({ ...data, titulo: e.target.value })}
        />

        <input
          placeholder="Género"
          value={data.genero}
          onChange={e => setData({ ...data, genero: e.target.value })}
        />

        <button type="submit" className="btn">Agregar</button>
      </form>
    );
  }


  // Formulario completo
  return (
    <form onSubmit={enviar} className="form form-full">

      <input
        placeholder="Título"
        value={data.titulo}
        onChange={e => setData({ ...data, titulo: e.target.value })}
      />

      <input
        placeholder="Género"
        value={data.genero}
        onChange={e => setData({ ...data, genero: e.target.value })}
      />

      <input
        placeholder="Portada URL (opcional)"
        value={data.portada}
        onChange={e => setData({ ...data, portada: e.target.value })}
      />

      <input
        type="number"
        placeholder="Horas jugadas"
        value={data.horasJugadas}
        onChange={e => setData({ ...data, horasJugadas: Number(e.target.value) })}
      />

      <input
        type="number"
        placeholder="Puntuación (0 a 5)"
        min={0}
        max={5}
        value={data.puntuacion}
        onChange={e => setData({ ...data, puntuacion: Number(e.target.value) })}
      />

      <button className="btn" type="submit">Agregar juego</button>
    </form>
  );
}
