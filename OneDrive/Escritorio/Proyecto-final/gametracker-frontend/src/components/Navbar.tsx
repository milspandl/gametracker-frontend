// Navbar.tsx - versión simple, bonita y estilo Backloggd
// Mantiene tu nivel de estudiante pero se ve mucho más moderno

export default function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "#18181c",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #2a2a2f",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Marca */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#6c63ff",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          GT
        </div>

        <div>
          <h2 style={{ margin: 0, fontSize: "20px" }}>GameTracker</h2>
          <div style={{ fontSize: "12px", color: "#b3b3c5" }}>
            Tu biblioteca de videojuegos
          </div>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <input
        placeholder="Buscar juegos..."
        style={{
          backgroundColor: "#0f0f12",
          border: "1px solid #2d2d32",
          padding: "8px 12px",
          borderRadius: "6px",
          color: "white",
          width: "200px",
        }}
      />
    </header>
  );
}
