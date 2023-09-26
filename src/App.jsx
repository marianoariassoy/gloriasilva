import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Imagenes from "./pages/imagenes/Imagenes";
import Soon from "./pages/palabras/Soon";
import Biografia from "./pages/biografia/Biografia";
import Contacto from "./pages/contacto/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imagenes" element={<Imagenes />} />
        <Route path="/palabras" element={<Soon />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
