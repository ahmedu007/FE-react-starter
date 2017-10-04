import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import list from "./components/list";

import Searchbar from "./components/searchBar";
import EmojiList from "./components/emojiList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: list,
      filtered: list
    };
    this.filterEmoji = this.filterEmoji.bind(this);
  }

  filterEmoji(searchText) {
    let result = list.filter(emoji => {
      return (
        emoji.title.includes(searchText) || emoji.keywords.includes(searchText)
      );
    });
    this.setState({
      filtered: result
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Emoji search engine</h1>
        </header>
        <br />
        <div>
          <Searchbar filterEmoji={this.filterEmoji} />
        </div>
        <p className="App-intro" />
        <br />
        <EmojiList emoji={this.state.filtered} />
      </div>
    );
  }
}

export default App;
