import React, { useState, useRef } from "react";
import "./Track.css";

const Track = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  return (
    <li style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
      <div className="trackInfo">{track.title}</div>
      <div>
        <button
          style={{ marginLeft: "10px" }}
          className="buttonPlay type2"
          onClick={togglePlayPause}
        >
          <span className="btn-txt">{isPlaying ? "Stop" : "Play"}</span>
        </button>
        <audio
          ref={audioRef}
          src={track.preview}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          type="audio/mpeg"
        ></audio>
      </div>
    </li>
  );
};

export default Track;
