import { Component } from "react";
import Searchbar from "./component/Searchbar/Searchbar";

class App extends Component {
  state={
    query:""
  }
  handleSearch=(query)=>{
  this.setState({
    query:query, 
  });
  
  }
  render(){
    console.log(this.state.query);
    
    return(
      <Searchbar onSubmit={this.handleSearch}/> 
    )
  }
}

export default App;