import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    
    <div className="app"> 
      <Header />

      <main className="main">
        <h2>Bienvenida a StudentsRepo</h2>
        <p>
          Una plataforma donde los estudiantes pueden compartir y consultar
          proyectos académicos fácilmente.
        </p>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;