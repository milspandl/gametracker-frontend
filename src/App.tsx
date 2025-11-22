import Navbar from "./components/Navbar.tsx";
import BibliotecaJuegos from "./components/BibliotecaJuegos";
import ListaReseñas from "./components/ListaReseñas";
import EstadisticasPersonales from "./components/EstadisticasPersonales";

export default function App() {
  return (
    <div style={{ backgroundColor: "#0f0f12", minHeight: "100vh", color: "white" }}>
      <Navbar />

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        {/* Hero Section */}
        <div
          style={{
            textAlign: "center",
            padding: "40px 0",
            marginBottom: "25px",
            backgroundColor: "#18181c",
            borderRadius: "12px",
          }}
        >
          <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>GameTracker</h1>
          <p style={{ color: "#b5b5c9" }}>
            Organizá tu biblioteca, reseñá y guardá tus horas de juego
          </p>
        </div>

        {/* Contenido principal */}
        <section
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Izquierda: Biblioteca */}
          <div style={{ flex: "3 1 600px" }}>
            <BibliotecaJuegos />
          </div>

          {/* Derecha: Stats + Reseñas */}
          <aside
            style={{
              flex: "1 1 250px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <EstadisticasPersonales />
            <ListaReseñas />
          </aside>
        </section>
      </main>
    </div>
  );
}
