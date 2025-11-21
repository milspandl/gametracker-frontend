import { useEffect, useState } from "react";
import axios from "axios";

export default function EstadisticasPersonales(){
  const [total, setTotal] = useState<number|null>(null);

  const cargar = async () => {
    try {
      const r = await axios.get("https://gametracker-backend-1.onrender.com/api/games");
      setTotal((r.data || []).length);
    } catch (e) {
      setTotal(0);
    }
  };

  useEffect(()=>{ cargar() }, []);

  return (
    <div className="card-compact">
      <h4 style={{marginTop:0}}>Estadísticas</h4>
      <div className="stat"><div>Total de juegos</div><div>{total === null ? "..." : total}</div></div>
      <div className="stat"><div>Horas jugadas</div><div>—</div></div>
      <div className="stat"><div>Completados</div><div>—</div></div>
    </div>
  );
}
