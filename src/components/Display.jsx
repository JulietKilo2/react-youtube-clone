import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import styles from "./display.module.css";
import List from "./List";

export default function Display({ videos }) {
  const [videoDetail, setVideoDetail] = useState(null);
  const [resizeList, setResizelist] = useState(false);

  const handleVideo = (video) => {
    // resize the list first
    setResizelist(true);

    if (typeof video.id !== "string") {
      // 'Search' returns an object with two IDs
      setVideoDetail({
        title: video.snippet.title,
        channel: video.snippet.channelTitle,
        desc: video.snippet.description,
        id: video.id.videoId,
      });
    } else {
      // 'Most Popular' returns ID immediately
      setVideoDetail({
        title: video.snippet.title,
        channel: video.snippet.channelTitle,
        desc: video.snippet.description,
        id: video.id,
      });
    }
  };

  useEffect(() => {
    // cleans up the videoDetail for new search results
    setVideoDetail(null);
    // set list resize to default(false)
    setResizelist(false);
  }, [videos]);

  return (
    <div className={styles.container}>
      {videoDetail && <Detail videoDetail={videoDetail} />}
      <List handleVideo={handleVideo} videos={videos} resizeList={resizeList} />
    </div>
  );
}
