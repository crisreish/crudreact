import React from "react";

export function Card({ carro, onEdit, onDelete }) {
  return (
    <div className="card">
      <img src={carro.imagem} className="card-img-top" alt={carro.nome} />
      <div className="card-body">
        <h5 className="card-title">{carro.nome}</h5>
        <p className="card-text">
          <strong>Data de Retirada:</strong> {carro.dataRetirada} <br />
          <strong>Data de Devolução:</strong> {carro.dataDevolucao} <br />
          <strong>Valor da Diária:</strong> {carro.valorDiaria} <br />
          <strong>Tipo:</strong> {carro.tipo} <br />
          <strong>Descrição:</strong> {carro.descricao} <br />
        </p>
        <button
          onClick={() => onEdit(carro.id)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button onClick={() => onDelete(carro.id)} className="btn btn-danger">
          Excluir
        </button>
      </div>
    </div>
  );
}
