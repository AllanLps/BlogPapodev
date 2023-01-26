import styles from "./Banner.module.scss";
import logo from "../../assets/logo.png";

import React from "react";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
      
        <h1 className={styles.titulo}>Olá, Dev!</h1>

        <p className={styles.paragrafo}>
          Bem vindo ao meu mini-blog! Eu sou Allan, Desenvolvedor Web Junior,
          aqui eu vou compartilhar conhecimentos, falar sobre tecnologia e contar a verdade sobre o mercado de tec! Espero que gostem ☺{" "}
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={logo}
          aria-hidden={true}
          alt="Circulo roxo"
        />
      </div>
    </div>
  );
}
