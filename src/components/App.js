import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/YouTube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("dua lipa");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                VideoList={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
