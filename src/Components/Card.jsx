import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/user/find/${video.userId}`);
      setChannel(res.data);
      console.log(res);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    // <Link to={`/video/${video._id}`}>
    <div className="w-80">
      <div className="rounded-xl bg-blue-200">
        <img
          // src="images/dyballa.jpg"
          src={channel.img}
          className="rounded-lg"
        />
      </div>
      <div className="mt-5 ">
        <div className="grid grid-rows-2 grid-cols-12">
          <div className="col-span-4">
            <img
              // src="images/dyballa.jpg"

              className="rounded-full h-12 w-12 object-cover"
            />
          </div>
          <div className="col-span-8 text-white">
            <p className="text-white">{video.title}</p>
            <p>{channel.name}</p>
            <p>{video.views}</p>
            <p>{format(video.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
