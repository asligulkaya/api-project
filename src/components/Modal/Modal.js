import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Modal.css";

const Modal = ({ isOpen, onClose, artist }) => {
  const [artistDetails, setArtistDetails] = useState(null);

  useEffect(() => {
    if (artist?.id) {
      artistInfo(artist.id);
    }
  }, [artist]);

  const artistInfo = async (id) => {
    try {
      const options = {
        method: "GET",
        url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`,
        headers: {
          "X-RapidAPI-Key":
            "d52566c1a4msh5a68782b31752e2p12d625jsn710a8da86682",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setArtistDetails(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalWindow">
        <button className="buttonClose" onClick={onClose}>
          <span className="X"></span>
          <span className="Y"></span>
          <div className="close">Close</div>
        </button>

        {artistDetails && (
          <div
            style={{
              flexFlow: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={artistDetails.picture_medium} alt="" />
            <a
              href={`https://www.deezer.com/artist/${artistDetails.id}`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <h2 style={{ color: "black" }}>{artist.name}</h2>
            </a>
            <p>
              <strong>Followers:</strong> {artistDetails.nb_fan}
            </p>
            <p>
              <strong>Albums:</strong> {artistDetails.nb_album}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
