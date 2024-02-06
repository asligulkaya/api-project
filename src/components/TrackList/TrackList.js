import React from "react";

const TrackList = ({ tracks }) => {
  return (
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>{track.title}</li>
      ))}
    </ul>
  );
};

export default TrackList;
