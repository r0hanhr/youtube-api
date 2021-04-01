import React, { Fragment, useEffect, useState } from "react";
import SearchComponent from "./Components/SearchComponent";
import VideoDetails from "./Components/VideoDetails";
import VideoList from "./Components/VideoList";
import Youtube from "./Youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  let onTermSubmit = async term => {
    let response = await Youtube.get("/search", {
      params: { q: term },
    });
    setVideos(response.data.items);
    setSelectedVideo((response.data.items = 0));
  };
  let onSelectedVideo = video => {
    setSelectedVideo(video);
  };
  useEffect(() => {
    onTermSubmit("reactjs");
  }, []);
  return (
    <Fragment>
      <section>
        <header>
          <SearchComponent onTermSubmit={onTermSubmit} />
        </header>
        <main className="container">
          <div className="row">
            <div className="col-md-8">
              <VideoDetails video={selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList videos={videos} onSelectedVideo={onSelectedVideo} />
            </div>
          </div>
        </main>
      </section>
    </Fragment>
  );
};

export default App;
