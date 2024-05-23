import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditCarro = ({ carros, editarCarro }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carro, setCarro] = useState(null);

  useEffect(() => {
    const carroToEdit = carros.find((c) => c.id === parseInt(id));
    if (carroToEdit) {
      setCarro(carroToEdit);
    }
  }, [id, carros]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarro((prevCarro) => ({
      ...prevCarro,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editarCarro(carro);
    navigate("/lista");
  };

  if (!carro) return <p>Carro não encontrado!</p>;

  return (
    <div>
      <h2 className="mt-4">Editar Carro</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={carro.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDataRetirada">
          <Form.Label>Data de Retirada</Form.Label>
          <Form.Control
            type="date"
            name="dataRetirada"
            value={carro.dataRetirada}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDataDevolucao">
          <Form.Label>Data de Devolução</Form.Label>
          <Form.Control
            type="date"
            name="dataDevolucao"
            value={carro.dataDevolucao}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formValorDiaria">
          <Form.Label>Valor da Diária</Form.Label>
          <Form.Control
            type="number"
            name="valorDiaria"
            value={carro.valorDiaria}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTipo">
          <Form.Label>Tipo</Form.Label>
          <Form.Select
            name="tipo"
            value={carro.tipo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o tipo</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Conversível">Conversível</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formDescricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            name="descricao"
            value={carro.descricao}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formImagem">
          <Form.Label>Link para Imagem</Form.Label>
          <Form.Control
            type="text"
            name="imagem"
            value={carro.imagem}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Salvar Alterações
        </Button>
      </Form>
    </div>
  );
};

export default EditCarro;
