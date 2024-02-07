import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = ({ setTracks }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    searchTracks("");
  }, []);

  const searchTracks = async (query) => {
    try {
      const searchQuery = query.trim() === "" ? "top10" : query;

      const options = {
        method: "GET",
        url: "https://deezerdevs-deezer.p.rapidapi.com/search",
        params: { q: searchQuery },
        headers: {
          "X-RapidAPI-Key":
            "d52566c1a4msh5a68782b31752e2p12d625jsn710a8da86682",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setTracks(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchClick = () => {
    searchTracks(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchTracks(query);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          type="text"
          name="text"
          className="input"
          style={{ marginRight: "10px" }}
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>

        <button className="button type1" onClick={handleSearchClick}>
          <span className="btn-txt">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
