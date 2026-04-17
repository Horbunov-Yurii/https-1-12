import { Component } from "react";
import Searchbar from "./component/Searchbar/Searchbar";
import { fetchImages } from "./api";

class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      return;
    }

    const {query, page} = this.state
    fetchImages(query, page).then((res) => {
      this.setState({images: res.hits})
    })
  }

  handleSearch = (query) => {
    this.setState({
      query: query,
      page: 1,
      images: [],
    });
  };
  render() {
    return <Searchbar onSubmit={this.handleSearch} />;
  }
}

export default App;
