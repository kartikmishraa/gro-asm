import React from "react";

function VideoThumbnail({ postData }) {
  //   const handle = postData.creator.handle;
  //   const name = postData.creator.name;
  const title = postData.submission.title;
  const description = postData.submission.description;
  const thumbnail = postData.submission.thumbnail;
  return (
    <>
      <div className="video-thumbnail">
        <img
          src={thumbnail}
          alt="thumbnail-img"
          className="thumbnail-image"
          // height={150}
          // width={250}
        />
        <div className="thumbnail-content">
          <h2 className="thumbnail-title">{title}</h2>
          {/* <p className="thumbnail-description">{description}</p> */}
        </div>
      </div>
    </>
  );
}

export default VideoThumbnail;
