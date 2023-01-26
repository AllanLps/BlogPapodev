import PostModelo from "components/PostModelo";
import fotoCapa from "../../../src/assets/sobre-mim.png";
import fotoSobreMim from "../../assets/minha-foto.png";
import styles from "./SobreMim.module.scss";
import React from "react";


export default function SobreMim() {
  return (
    <>
      <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
        <h3 className={styles.subtitulo}>Olá, eu sou Allan!</h3>
        <img
          src={fotoSobreMim}
          alt="foto do Allan de terno"
          className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
          Oi, tudo bem? Eu sou desenvolvedor front-end e mobile júnior e estou
          muito contente que você esteja por aqui.{" "}
        </p>
        <p className={styles.paragrafo}>
          Vou contar brevemente minha história com a programação e como eu
          entrei para o mundo de tecnologia; tudo começa no ano de 2018 para
          2019 quando eu consigo um trabalho como jovem aprendiz em uma empresa
          de pedágios, coincidentemente cai no setor de tecnologia da
          informação, no início fiquei chateado, pois naquela época meu desejo
          era cursar Direito e queria entrar no setor jurídico dessa mesma
          empresa.
        </p>
        <p className={styles.paragrafo}>
          Com o tempo esse desejo foi morrendo e a paixão pela tecnologia passou
          a crescer, até que surge uma oportunidade de estágio no meu setor e eu
          prontamente me candidatei a vaga iniciando junto a faculdade de
          Análise e Desenvolvimento de Sistemas, a qual sou formado atualmente.
        </p>
        <p className={styles.paragrafo}>
          Concluída a faculdade e o período nessa empresa de pedágio, apareceu
          uma oportunidade como Analista de Suporte na Obramax, aprendi muito
          nesse novo desafio, pois participei de toda a implantação da loja e
          tive um aprendizado exponencial em infraestrutura de TI, mas ainda não
          era o que eu queria fazer dentro da área de tecnologia
        </p>
        .
        <p className={styles.paragrafo}>
          Até que resolvi me aventurar com a programação, comecei com Python,
          gostei até, mas queria algo que fosse mais visível aos meus olhos,
          como sempre curti design, o front-end foi o match perfeito! Comecei a
          estudar a fundo no início de 2022 e hoje estou aprendendo muito sobre
          esse novo universo e sei que ainda tem muito caminho pela frente,
          inclusive, esse blog é um objeto dos meus estudos em front-end, foi
          feito todo em REACT JS e SCSS.
        </p>
        <p className={styles.paragrafo}>
          Aqui vou procurar trazer assuntos como tecnologia, carreira e ajudar quem 
          está começando no que eu puder, espero que gostem! ☺
        </p>
      </PostModelo>
    </>
  );
}
