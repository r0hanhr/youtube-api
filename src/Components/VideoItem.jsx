import React, { Fragment } from "react";

const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <Fragment>
      <main
        onClick={() => {
          console.log(onSelectedVideo(video));
        }}
      >
        <div>
          <img src={video.snippet.thumbnails.medium.url} alt={video.name} />
        </div>
        <div>
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </main>
    </Fragment>
  );
};

export default VideoItem;
