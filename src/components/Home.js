import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="Primeiro slide"
            src="https://garagem360.com.br/wp-content/uploads/2024/02/jac-ejs1-jc1-1160x652-1.jpg"
            alt="Primeiro slide"
          />
          <Carousel.Caption className="carousel-caption">
            {" "}
            {/* Adiciona a classe carousel-caption */}
            <h3>Renault Zoe e-tech Elétrico</h3>
            <p>
              SUV elétrico compacto, oferece bastante espaço para os ocupantes.
              células da bateria do novo SUV elétrico. Células da bateria que
              elimina o nível de ruído do módulo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Segundo slide"
            src="https://jornaldocarro.estadao.com.br/wp-content/uploads/2023/06/IMG_20230616_161835459_HDR-1160x652.jpg"
            alt="Segundo slide"
          />
          <Carousel.Caption className="carousel-caption">
            {" "}
            {/* Adiciona a classe carousel-caption */}
            <h3>Toyota Yaris 2023</h3>
            <p>
              Picape compacta monobloco, conjunto ótico full LED e rodas
              diamantadas de até 19 polegadas. Oferece um espaço de caçamba
              generoso, com capacidade para 935 litros.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Terceiro slide"
            src="https://mundofixa.com/wp-content/uploads/2023/10/XiaoPaoChe-SC-01-reveals-in-China-CNC-1-3-1160x652-2.jpg"
            alt="Terceiro slide"
          />
          <Carousel.Caption className="carousel-caption">
            {" "}
            {/* Adiciona a classe carousel-caption */}
            <h3>GWM Ora 03 2024</h3>
            <p>
              Farol alto automático, que reduz o facho do farol quando detecta
              veículo no sentido oposto. Retrovisores externos com setas,
              rebatimento elétrico e aquecimento.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
