function VideoThumbnail({ postData, onClick }) {
  //   const handle = postData.creator.handle;
  //   const name = postData.creator.name;
  // const description = postData.submission.description;
  const title = postData.submission.title;
  const profilePic = postData.creator.pic;
  const thumbnail = postData.submission.thumbnail;
  // const mediaUrl = postData.submission.mediaUrl;

  return (
    <>
      <div
        className="video-thumbnail"
        onClick={() => {
          onClick(postData);
        }}
      >
        <img
          src={thumbnail}
          alt="thumbnail-img"
          className="thumbnail-image"
          // height={150}
          // width={250}
        />
        <div className="thumbnail-content">
          <img src={profilePic} alt="profile-pic" className="profile-image" />
          <h3 className="thumbnail-title">{title}</h3>
        </div>
      </div>
    </>
  );
}

export default VideoThumbnail;
