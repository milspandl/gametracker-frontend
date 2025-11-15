import axios from "axios";
import { useState } from "react";

export default function FormularioJuego({ recargar, inline }: any) {
  const [data, setData] = useState({ titulo:"", genero:"", portada:"", horasJugadas:0, puntuacion:0 });

  const enviar = async (e?:any) => {
    if (e) e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/games", data);
      setData({ titulo:"", genero:"", portada:"", horasJugadas:0, puntuacion:0 });
      if (recargar) recargar();
    } catch (err) {
      console.error(err);
      alert("Error al agregar juego");
    }
  };

  if (inline) {
    return (
      <form onSubmit={enviar} className="form" style={{alignItems:"center"}}>
        <input placeholder="Título" value={data.titulo} onChange={e=>setData({...data, titulo:e.target.value})} />
        <input placeholder="Género" value={data.genero} onChange={e=>setData({...data, genero:e.target.value})} />
        <button type="submit" className="btn">Agregar</button>
      </form>
    );
  }

  return (
    <form onSubmit={enviar} className="form">
      <input placeholder="Título" value={data.titulo} onChange={e=>setData({...data, titulo:e.target.value})} />
      <input placeholder="Género" value={data.genero} onChange={e=>setData({...data, genero:e.target.value})} />
      <input placeholder="Portada URL (opcional)" value={data.portada} onChange={e=>setData({...data, portada:e.target.value})} />
      <input type="number" placeholder="Horas" value={data.horasJugadas} onChange={e=>setData({...data, horasJugadas:Number(e.target.value)})} />
      <input type="number" placeholder="Punt." min={0} max={5} value={data.puntuacion} onChange={e=>setData({...data, puntuacion:Number(e.target.value)})} />
      <button className="btn" type="submit">Agregar juego</button>
    </form>
  );
}
