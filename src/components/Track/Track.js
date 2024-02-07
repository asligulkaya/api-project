import React, { useState, useRef } from "react";
import "./Track.css";
import Modal from "../Modal/Modal";

const Track = ({ track, onSelectTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
    onSelectTrack(track, !isPlaying);
  };

  return (
    <>
      <li style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <div className="trackInfo">
          {track.artist.picture && (
            <img
              src={track.album.cover}
              style={{ marginRight: "50px" }}
              alt=""
            />
          )}
          <strong
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalOpen(true)}
          >
            {track.artist.name}
          </strong>{" "}
          - {track.title}
        </div>
        <div className="albumInfo">{track.album.title}</div>
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
            onPlay={() => onSelectTrack(track, true)}
            onPause={() => onSelectTrack(track, false)}
            onEnded={() => onSelectTrack(track, false)}
            type="audio/mpeg"
          ></audio>
        </div>
      </li>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        artist={track.artist}
      />
      <div></div>
    </>
  );
};

export default Track;
