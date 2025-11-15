export default function Navbar(){
  return (
    <header className="navbar">
      <div className="brand">
        <div className="logo">GT</div>
        <div>
          <h2>GameTracker</h2>
          <div style={{fontSize:12, color:"var(--muted)"}}>Tu biblioteca de videojuegos</div>
        </div>
      </div>

      <input className="search" placeholder="Buscar juegos..." />
    </header>
  );
}
