import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

function App() {
  const [searchEntry, setSearchEntry] = useState(null);
  const [videos, setVideos] = useState(null);

  const handleSubmit = (value) => {
    setSearchEntry(value);
  };

  useEffect(() => {
    const apiKey = process.env.REACT_APP_YOUTUBE_KEY;
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (searchEntry !== null) {
      const apiKey = process.env.REACT_APP_YOUTUBE_KEY;
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchEntry}&key=${apiKey}`
      )
        .then((response) => response.json())
        .then((result) => setVideos(result.items))
        .catch((error) => console.log("error", error));
    }
    return;
  }, [searchEntry]);

  return (
    <div className="app">
      <Navbar handleSubmit={handleSubmit} />
      <Display videos={videos} />
    </div>
  );
}

export default App;
