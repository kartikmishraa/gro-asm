import React from "react";
import { fetchVideo } from "../services/api";
import { useState, useEffect } from "react";
import VideoThumbnail from "./VideoThumbnail";

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
          <VideoThumbnail postData={videos.data.posts[9]} />
        ) : (
          <h1>nothing to view</h1>
        )}

        {videos ? (
          <VideoThumbnail postData={videos.data.posts[0]} />
        ) : (
          <h1>nothing to view</h1>
        )}
        {videos ? (
          <VideoThumbnail postData={videos.data.posts[0]} />
        ) : (
          <h1>nothing to view</h1>
        )}
        {videos ? (
          <VideoThumbnail postData={videos.data.posts[0]} />
        ) : (
          <h1>nothing to view</h1>
        )}
        {videos ? (
          <VideoThumbnail postData={videos.data.posts[0]} />
        ) : (
          <h1>nothing to view</h1>
        )}
        {videos ? (
          <VideoThumbnail postData={videos.data.posts[0]} />
        ) : (
          <h1>nothing to view</h1>
        )}
        {videos ? (
          <VideoThumbnail postData={videos.data.posts[0]} />
        ) : (
          <h1>nothing to view</h1>
        )}
        {videos ? (
          <VideoThumbnail postData={videos.data.posts[0]} />
        ) : (
          <h1>nothing to view</h1>
        )}
      </div>
    </>
  );
}

export default VideoList;
