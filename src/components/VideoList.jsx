import React from "react";
import { fetchVideo } from "../services/api";
import { useState, useEffect } from "react";
import VideoThumbnail from "./VideoThumbnail";
import LoadingSpinner from "../components/LoadingSpinner";

function VideoList() {
  const [videos, setVideos] = useState(null);
  const [page, setPage] = useState(0);

  const handlePrev = () => {
    if (page > 0) setPage((page) => page - 1);
  };

  const handleNext = () => {
    if (page < 9) setPage((page) => page + 1);
  };

  // Fetching page data
  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideo(page);
        setVideos(data);
      } catch (err) {
        console.error("Erorr fetching videos: ", err);
      }
    };

    getVideos();
  }, [page]);

  return (
    <>
      <hr width="1400px" /> {/* make it responsive*/}
      <div className="pagination">
        <button onClick={handlePrev}>prev</button>
        <p>{page}</p>
        <button onClick={handleNext}>next</button>
      </div>
      <div className="video-list">
        {videos ? (
          videos.data.posts.map((post) => (
            <VideoThumbnail postData={post} key={post.postId} />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
}

export default VideoList;
