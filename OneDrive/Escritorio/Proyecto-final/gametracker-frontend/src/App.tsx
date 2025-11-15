import Navbar from "./components/Navbar.tsx";
import BibliotecaJuegos from "./components/BibliotecaJuegos";
import ListaReseñas from "./components/ListaReseñas";
import EstadisticasPersonales from "./components/EstadisticasPersonales";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="hero">
          <h1>GameTracker</h1>
          <p className="subtitle">Organizá tu biblioteca, reseñá y guardá tus horas de juego</p>
        </div>

        <section className="content">
          <div className="left">
            <BibliotecaJuegos />
          </div>
          <aside className="right">
            <EstadisticasPersonales />
            <ListaReseñas />
          </aside>
        </section>
      </main>
    </>
  );
}
