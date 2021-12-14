import React from "react";
import PropTypes from "prop-types";
import SongList from "./components/SongList";

SongFeature.propTypes = {};

function SongFeature(props) {
  const songList = [
    {
      id: 1,
      title: "Lạc Trôi",
      thumnail:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/covers/d/f/df9bcb5bc3a8b3171e43e15746d3d99b_1504857647.jpg",
    },
    {
      id: 2,
      title: "Em của ngày hôm qua",
      thumnail:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_png/covers/9/e/9edfd7a190f23d7645e60891c0495d4c_1399868563.png",
    },
    {
      id: 3,
      title: "Hãy trao cho anh",
      thumnail:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/covers/9/8/98e3677733fe52439823d1b1992d9ae0_1483242323.jpg",
    },
  ];
  return (
    <>
      <h1>Bạn phải thích</h1>
      <SongList songList={songList}></SongList>
    </>
  );
}

export default SongFeature;
