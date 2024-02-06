import Search from "../Search/Search";
import deepSound from "../../assets/deep-sound.png";

export default function Navbar({ setTracks }) {
  return (
    <div
      style={{
        borderBottom: "2px solid rgb(92 93 99)",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        fontFamily: "Open Sans, sans-serif",
      }}
    >
      <img style={{ width: "70px" }} src={deepSound} alt="deep sound" />
      <span
        style={{
          fontWeight: "800",
          fontFamily: "Open Sans, sans-serif",
          marginRight: "5rem",
          color: "white"
        }}
      >
        DEEP SOUND
      </span>
      <Search setTracks={setTracks} />
    </div>
  );
}
