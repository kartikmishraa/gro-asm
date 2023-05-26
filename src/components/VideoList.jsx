import React from "react";
import { fetchVideo } from "../services/api";
import { useState, useEffect } from "react";
import VideoThumbnail from "./VideoThumbnail";
import LoadingSpinner from "../components/LoadingSpinner";

function VideoList() {
  const [videos, setVideos] = useState(null);

  // Fetching page data
  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideo();
        setVideos(data);
      } catch (err) {
        console.error("Erorr fetching videos: ", err);
      }
    };

    getVideos();
  }, []);

  // For debugging
  useEffect(() => {
    console.log(videos);
  }, [videos]);

  return (
    <>
      <hr width="1400px" /> {/* make it responsive*/}
      <div className="video-list">
        {videos ? (
          videos.data.posts.map((post) => <VideoThumbnail postData={post} />)
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
}

export default VideoList;
