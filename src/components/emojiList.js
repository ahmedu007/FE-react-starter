import React from "react";

import "./emojiList.css";

class EmojiList extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmojiList = this.handleEmojiList.bind(this);
  }

  handleEmojiList(event) {
    console.log(event.target);
  }

  render() {
    return (
      <div className="Row">
        {this.props.emoji.map(emoji => {
          return (
            <div className="Column" key={emoji.title}>
              {emoji.symbol}
              {emoji.title}
            </div>
          );
        })}
      </div>
    );
  }
}

export default EmojiList;
