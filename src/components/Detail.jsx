import React from "react";
import styles from "./detail.module.css";

export default function Detail({ videoDetail }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <iframe
          className={styles.video}
          width="620"
          height="480"
          src={`https://www.youtube.com/embed/${videoDetail.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <p className={styles.title}>{videoDetail.title}</p>
        <p className={styles.channel}>{videoDetail.channel}</p>
        <p className={styles.desc}>{videoDetail.desc}</p>
      </div>
    </div>
  );
}
