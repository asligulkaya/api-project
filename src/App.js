import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({ track: null, isPlaying: false });

  const handleSelectTrack = (track, isPlaying) => {
    setCurrentTrack({ track, isPlaying });
  };

  return (
    <div>
      <Navbar setTracks={setTracks} />
      <Content tracks={tracks} setCurrentTrack={handleSelectTrack} />
      <MusicPlayer
        track={currentTrack.track} isPlaying={currentTrack.isPlaying}
      />
    </div>
  );
}

export default App;
