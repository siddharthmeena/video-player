import React from "react";

class SearchBar extends React.Component {
  state = { item: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.item);
  };
  render() {
    return (
      <div className="ui segment">
        <form
          action=""
          onSubmit={(e) => this.onFormSubmit(e)}
          className="ui form"
        >
          <div className="field">
            <input
              type="text"
              value={this.state.item}
              onChange={(e) => this.setState({ item: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
