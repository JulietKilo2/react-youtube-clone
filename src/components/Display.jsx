import React from "react";
import styles from "./display.module.css";

export default function Display({ videos }) {
  return (
    <div className={styles.container}>
      {console.log(videos)}
      {videos ? (
        videos.map((video) => {
          return (
            <div key={video.etag} className={styles.card}>
              <img
                className={styles.img}
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <div className={styles.textContainer}>
                <p className={styles.videoTitle}>{video.snippet.title}</p>
                <p className={styles.videoAuthor}>
                  {video.snippet.channelTitle}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
}
