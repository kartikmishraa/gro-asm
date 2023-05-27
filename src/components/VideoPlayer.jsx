import ReactPlayer from "react-player";

// @component-name: <VideoPlayer />
// @desc: renders a video player to play and control video playback.
function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-player">
      <ReactPlayer url={videoUrl} controls={true} playing={true} />
    </div>
  );
}

export default VideoPlayer;
