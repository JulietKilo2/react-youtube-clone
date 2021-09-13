import React from "react";
import styles from "./list.module.css";

export default function List({ videos, handleVideo, resizeList }) {
  return (
    <div className={styles.container}>
      {videos
        ? videos.map((video) => {
            return (
              <div
                key={video.etag}
                className={resizeList ? styles.smallCard : styles.card}
                onClick={() => handleVideo(video)}
              >
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
        : ""}
    </div>
  );
}
