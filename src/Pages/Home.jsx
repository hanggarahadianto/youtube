import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import Video from "./Video";

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/video/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <div className="bg-black  grid grid-rows-2 grid-cols-12">
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}

      {/* <Card /> */}
    </div>
  );
};

export default Home;
