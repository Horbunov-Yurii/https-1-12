import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
export default class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        <ul >
          {images.map(({ webformatURL, id, name }) => {
            return (
                <ImageGalleryItem key={id} webformatURL={webformatURL} name={ name} />
            );
          })}
        </ul>
      </>
    );
  }
}
