import React, { Component } from "react";

export default class ImageGalleryItem extends Component{
    render() {
        const { webformatURL, name,id } = this.props;
        return (
          <li key={id}>
            <img src={webformatURL} alt={name} />
          </li>
        );
    }
}