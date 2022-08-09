import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Components/Card";

const Video = ({ type }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get("/video/random");
      setVideo(res.data);
    };
    fetchVideo();
  }, [type]);

  return (
    <div>
      {video.map((video) => (
        <Card />
      ))}
      {/* <Card /> */}
    </div>
  );
};

export default Video;
