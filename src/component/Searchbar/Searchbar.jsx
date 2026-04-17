import { Component } from "react";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query === "") {
      return;
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
