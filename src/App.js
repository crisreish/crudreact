import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Cadastro from "./components/Cadastro";
import ListaCarros from "./components/ListaCarros";
import EditCarro from "./components/EditCarro";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [carros, setCarros] = useState([]);

  const handleAddCarro = (carro) => {
    const newCarro = { ...carro, id: carros.length + 1 };
    setCarros([...carros, newCarro]);
  };

  const handleEditCarro = (carroAtualizado) => {
    const updatedCarros = carros.map((carro) =>
      carro.id === carroAtualizado.id ? carroAtualizado : carro
    );
    setCarros(updatedCarros);
  };

  const handleDeleteCarro = (id) => {
    setCarros(carros.filter((carro) => carro.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cadastro"
            element={<Cadastro onAddCarro={handleAddCarro} />}
          />
          <Route
            path="/lista"
            element={
              <ListaCarros
                carros={carros}
                onEdit={handleEditCarro}
                onDelete={handleDeleteCarro}
              />
            }
          />
          <Route
            path="/lista/edit/:id"
            element={
              <EditCarro carros={carros} editarCarro={handleEditCarro} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
