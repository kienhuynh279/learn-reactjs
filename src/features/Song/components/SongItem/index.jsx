import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

SongItem.propTypes = {
  song: PropTypes.object.isRequired,
};

function SongItem({ song }) {
  return (
    <div className="song">
      <div className="song__thumnail">
        <img src={song.thumnail} alt={song.title} />
      </div>
      <p className="song__name">{song.title}</p>
    </div>
  );
}

export default SongItem;
