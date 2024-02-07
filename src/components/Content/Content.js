import React from "react";
import Track from "../Track/Track";

const Content = ({ tracks, setCurrentTrack }) => {
  const isTop10 = tracks?.some((track) => track.title === "Top 10");
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
      {tracks?.length > 0 && !isTop10 ? (
        <h4>The following results were found:</h4>
      ) : (
        <div>
          <h4>
            We couldn't find what you were looking for. How about checking these
            out?{" "}
          </h4>
          <h3>Top 10:</h3>
        </div>
      )}
      {tracks?.length > 0 ? (
        <ul style={{ listStyle: "none" }}>
          {tracks.map((track) => (
            <Track
              key={track.id}
              track={track}
              onSelectTrack={setCurrentTrack}
            />
          ))}
        </ul>
      ) : (
        <p>No tracks found. Please perform a search.</p>
      )}
    </div>
  );
};

export default Content;
