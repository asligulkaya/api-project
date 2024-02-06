import React from "react";

const Content = ({ tracks }) => {
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      {tracks.length > 0 ? (
        <ul>
          {tracks.map((track) => (
            <li key={track.id}>{track.title}</li>
          ))}
        </ul>
      ) : (
        <p>No tracks found. Please perform a search.</p>
      )}
    </div>
  );
};

export default Content;
