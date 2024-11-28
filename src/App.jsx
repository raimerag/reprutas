import ApiGatos from "./components/API_Gatos/ApiGatos";
import { Card } from "./components/card/Card";
import { Footer } from "./components/footer/Footer";
import { Formulario } from "./components/formulario/Form";
import { Navbar } from "./components/navegacion/Navbar";
import NoFound from "./components/NoFound/NoFound";
import { Productos } from "./components/productos/Productos";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/gAtOs" element={<ApiGatos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<NoFound />} />
      </Routes>

      <Footer
        description={"© 2018 Cuppon Latam .Todos los derechos Reservados."}
      />
    </BrowserRouter>
  );
}

export default App;
