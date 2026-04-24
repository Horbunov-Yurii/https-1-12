import React, { Component } from "react";
import style from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscCloseModal);
  }

  handleEscCloseModal = (event) => {
    if (event.key === "Escape") {
      this.props.onCloseModal();
    }
  };

  handleBackDrop = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { isModalImage } = this.props;

    return (
      <div className={style.overlay} onClick={this.handleBackDrop}>
        <div className={style.modal}>
          <img className={style.image} src={isModalImage} alt="" />
        </div>
      </div>
    );
  }
}