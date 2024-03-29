import React from "react";
import Track from "../Track/Track";

const Content = ({ tracks, setCurrentTrack }) => {
  return (
    <div
      style={{
        fontFamily: "Open Sans, sans-serif",
        overflowY: "scroll",
        height: "70vh",
        marginLeft: "10%",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        color: "white",
      }}
    >
      {tracks && tracks.length > 0 ? (
        <>
          <h4>The following results were found:</h4>
          <ul style={{ listStyle: "none" }}>
            {tracks.map((track) => (
              <Track
                key={track.id}
                track={track}
                onSelectTrack={setCurrentTrack}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>No tracks found. Please perform a search.</p>
      )}
    </div>
  );
};

export default Content;
