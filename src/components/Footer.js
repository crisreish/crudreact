import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col className="text-center mb-3 mb-md-0">
            <h5>Contatos</h5>
            <p>(21) 97323-9019</p>
            <p>contato@nextlocadora.com</p>
            <p>end: Rua São José, 99, RJ</p>
          </Col>
          <Col className="text-center mb-3 mb-md-0">
            <h5>Sobre nós</h5>
            <p>Porque a Next Carros</p>
            <p>Institucional</p>
            <p>Trabalhe Conosco</p>
          </Col>
          <Col className="text-center">
            <h5>Legal</h5>
            <p>Contrato Pessoa Física</p>
            <p>Contrato Pessoa Jurídica</p>
            <p>Política de Privacidade</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
