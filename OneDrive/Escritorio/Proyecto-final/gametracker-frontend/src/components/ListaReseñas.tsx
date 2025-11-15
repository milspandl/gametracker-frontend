import axios from "axios";
import { useEffect, useState } from "react";
import FormularioReseña from "./FormularioReseña";

export default function ListaReseñas(){
  const [reseñas, setReseñas] = useState<any[]>([]);

  const cargar = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/reviews/1234567890");
      setReseñas(res.data || []);
    } catch (e) {
      console.error(e);
      setReseñas([]);
    }
  };
  useEffect(()=>{ cargar() }, []);

  return (
    <div className="card-compact">
      <h4 style={{marginTop:0}}>Reseñas recientes</h4>
      <FormularioReseña recargar={cargar} />
      <div style={{marginTop:8}}>
        {reseñas.length === 0 ? (
          <div style={{color:"var(--muted)", fontSize:13}}>No hay reseñas aún</div>
        ) : reseñas.slice(0,5).map(r=>(
          <div key={r._id} style={{marginTop:8}}>
            <strong style={{fontSize:13}}>{r.estrellas}★</strong>
            <div style={{color:"var(--muted)", fontSize:13}}>{r.texto}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
