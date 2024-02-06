import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  const [tracks, setTracks] = useState([]);

  return (
    <div>
      <Navbar setTracks={setTracks} />
      <Content tracks={tracks} />
    </div>
  );
}

export default App;
