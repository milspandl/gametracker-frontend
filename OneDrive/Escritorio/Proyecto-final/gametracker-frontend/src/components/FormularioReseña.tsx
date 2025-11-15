import axios from "axios";
import { useState } from "react";

export default function FormularioReseña({ recargar }: any){
  const [data, setData] = useState({ texto:"", estrellas:5, juegoId:"1234567890" });

  const enviar = async (e:any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/reviews", data);
      setData({ texto:"", estrellas:5, juegoId:"1234567890" });
      if (recargar) recargar();
    } catch (e) { console.error(e); alert("Error al enviar reseña"); }
  };

  return (
    <form onSubmit={enviar} style={{display:"flex", gap:8, marginTop:8}}>
      <input placeholder="Escribir reseña..." value={data.texto} onChange={e=>setData({...data, texto:e.target.value})} />
      <input type="number" min={1} max={5} value={data.estrellas} onChange={e=>setData({...data, estrellas:Number(e.target.value)})} />
      <button className="btn" type="submit">Enviar</button>
    </form>
  );
}
