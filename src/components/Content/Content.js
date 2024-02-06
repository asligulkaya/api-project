import React from "react";
import Track from "../Track/Track";

const Content = ({ tracks }) => {
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      {tracks.length > 0 ? (
        <ul style={{ listStyle: "none" }}>
          {tracks.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </ul>
      ) : (
        <p>No tracks found. Please perform a search.</p>
      )}
    </div>
  );
};

export default Content;
