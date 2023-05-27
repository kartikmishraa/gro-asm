import React from "react";
import VideoPlayer from "../components/VideoPlayer";

function VideoWindow({ videoData, onClose }) {
  const videoUrl = videoData.submission.mediaUrl;
  const title = videoData.submission.title;
  const profilePic = videoData.creator.pic;
  const description = videoData.submission.description;
  const username = videoData.creator.handle;
  const views = videoData.reaction.count;

  return (
    <div className="video-playback">
      <VideoPlayer videoUrl={videoUrl} className="video" />
      <div className="playback-content">
        <hr width={"700px"} />
        <h1 className="thumbnail-title">{title}</h1>
        <div className="flex-row">
          <img src={profilePic} alt="profile-pic" className="profile-image" />
          <p>{username}</p>
        </div>
        {/* <hr /> */}
        <div className="description">
          <p>
            {views} Views <br />
            <b>
              <u>Description</u>
            </b>
            <br />
            {description}
          </p>
        </div>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default VideoWindow;
