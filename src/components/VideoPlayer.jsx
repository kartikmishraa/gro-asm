import ReactPlayer from "react-player";

function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-player">
      <ReactPlayer url={videoUrl} controls={true} />
    </div>
  );
}

export default VideoPlayer;
