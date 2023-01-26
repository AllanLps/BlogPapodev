import React from "react";
import styles from "./Inicio.module.scss";

import posts from "../../json/posts"
import Post from "components/PostCard";


export default function Inicio() {
  return (
    <main>
      <ul className={styles.posts}>
          {posts.map((post)=>(
              <li key={post.id}>
                <Post post={post}/>
              </li>
          ))}
      </ul>
    </main>
    
  );
}
