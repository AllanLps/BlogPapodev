import BotaoPrincipal from "components/BotaoPrincipal";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NaoEcontrada.module.scss";

export default function NaoEncontrado() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Post não econtrado. :( </h1>

        <p className={styles.paragrafo}>
          {" "}
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div 
          className={styles.botaoContainer}
          onClick={()=> navegar("/")}
          >
          <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
        </div>
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
