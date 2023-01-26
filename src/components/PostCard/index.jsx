import styles from "./Post.module.scss";

import React from "react";
import { Link } from "react-router-dom";
import BotaoPrincipal from "components/BotaoPrincipal";

export default function Post({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`assets/post/${post.id}/capa.png`}
          alt="Capa dos posts"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

       <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}
