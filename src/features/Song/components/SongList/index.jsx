import React from "react";
import PropTypes from "prop-types";
import SongItem from "../SongItem";
import "./style.scss";

SongList.propTypes = {
  songList: PropTypes.array.isRequired,
};

function SongList({ songList }) {
  return (
    <ul class="song-list">
      {songList.map((song) => (
        <li key={song.id}>
          <SongItem song={song}></SongItem>
        </li>
      ))}
    </ul>
  );
}

export default SongList;
