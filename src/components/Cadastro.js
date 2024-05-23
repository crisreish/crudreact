import React, { useState } from "react";

const Cadastro = ({ onAddCarro }) => {
  const [carro, setCarro] = useState({
    nome: "",
    dataRetirada: "",
    dataDevolucao: "",
    valorDiaria: "",
    tipo: "",
    descricao: "",
    imagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarro({ ...carro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCarro(carro);
    setCarro({
      nome: "",
      dataRetirada: "",
      dataDevolucao: "",
      valorDiaria: "",
      tipo: "",
      descricao: "",
      imagem: "",
    });
  };

  return (
    <div className="container mt-4 pb-4">
      {" "}
      {}
      <h2>Cadastro de Carro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome do Carro</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={carro.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Data de Retirada</label>
          <input
            type="date"
            className="form-control"
            name="dataRetirada"
            value={carro.dataRetirada}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Data de Devolução</label>
          <input
            type="date"
            className="form-control"
            name="dataDevolucao"
            value={carro.dataDevolucao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Valor da Diária</label>
          <input
            type="number"
            className="form-control"
            name="valorDiaria"
            value={carro.valorDiaria}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tipo</label>
          <select
            className="form-control"
            name="tipo"
            value={carro.tipo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o tipo do carro</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Conversível">Conversível</option>
          </select>
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <textarea
            className="form-control"
            name="descricao"
            value={carro.descricao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Link da Imagem</label>
          <input
            type="text"
            className="form-control"
            name="imagem"
            value={carro.imagem}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
