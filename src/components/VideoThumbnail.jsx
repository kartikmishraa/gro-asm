// @component-name: <VideoThumbnail />
// @desc: Renders a thumbnail preview of a video with title and image
function VideoThumbnail({ postData, onClick }) {
  const title = postData.submission.title;
  const profilePic = postData.creator.pic;
  const thumbnail = postData.submission.thumbnail;

  return (
    <>
      <div
        className="video-thumbnail"
        onClick={() => {
          onClick(postData);
        }}
      >
        <img src={thumbnail} alt="thumbnail-img" className="thumbnail-image" />
        <div className="thumbnail-content">
          <img src={profilePic} alt="profile-pic" className="profile-image" />
          <h3 className="thumbnail-title">{title}</h3>
        </div>
      </div>
    </>
  );
}

export default VideoThumbnail;
