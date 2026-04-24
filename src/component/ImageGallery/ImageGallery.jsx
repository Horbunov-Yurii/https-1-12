import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;

    return (
      <ul>
        {images.map(({ webformatURL, largeImageURL, tags, id }) => {
          return (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
              tags={tags}
              onClick={onImageClick}
            />
          );
        })}
      </ul>
    );
  }
} 