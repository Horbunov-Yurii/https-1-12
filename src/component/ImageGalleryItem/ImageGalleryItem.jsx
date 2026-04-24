import React, { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags, onClick, largeImageURL } = this.props;

    return (
      <li>
        <img
          onClick={() => onClick(largeImageURL)}
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  }
}