import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const renderdList = this.props.VideoList.map((video) => (
      <VideoItem
        video={video}
        onVideoSelect={this.props.onVideoSelect}
        key={video.id.videoId}
      />
    ));
    return <div className="ui relaxed divided list">{renderdList}</div>;
  }
}
export default VideoList;
