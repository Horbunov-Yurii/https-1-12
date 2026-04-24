import { Component } from "react";
import "./App.css";
import Searchbar from "./component/Searchbar/Searchbar";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import Loader from "./component/Loader/Loader";
import Button from "./component/Button/Button";
import { fetchImages } from "./api";
import Modal from "./component/Modal/Modal";

class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
    isLoading: false,
    isModalImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.loadImages();
    }
  }

  loadImages = () => {
    const { query, page } = this.state;
    if (!query) {
      return;
    }
    this.setState({ isLoading: true });
    fetchImages(query, page)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearch = (query) => {
    this.setState({
      query: query,
      page: 1,
      images: [],
    });
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => {
        this.loadImages();
      },
    );
  };

  openModal = (largeImage) => {
    this.setState({ isModalImage: largeImage });
  };

  closeModal = () => {
    this.setState({ isModalImage: null });
  };  

  render() {
    console.log(this.state.isModalImage);

    return (
      <>
        {this.state.isLoading && <Loader />}
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.isModalImage && (
          <Modal
            isModalImage={this.state.isModalImage}
            onCloseModal={this.closeModal}
            onOpenModal={this.openModal}
          />
        )}
        <ImageGallery
          images={this.state.images}
          onImageClick={this.openModal}
        />
        {this.state.images.length > 0 && <Button onClick={this.loadMore} />}
      </>
    );
  }
}

export default App;
