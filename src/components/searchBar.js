import React from "react";
// import PT from "prop-types";
// import emojiList from "./list";

import "./searchBar.css";

// const CHAR_LIMIT = 10;

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    // if (searchEmoji.length > CHAR_LIMIT) return;
    this.setState({
      search: event.target.value
    });
    this.props.filterEmoji(event.target.value);
  }

  render() {
    return (
      <div className="wrap">
        <div className="search">
          <form>
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              onChange={this.handleChange}
            />
            {/* {CHAR_LIMIT - this.state.search.length} */}
          </form>
        </div>
      </div>
    );
  }
  static PT = {};
}

export default Searchbar;
