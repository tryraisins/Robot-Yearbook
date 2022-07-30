import React, { Component } from "react";
import CardList from "../Components/CardList";
import Scroll from "../Components/Scroll";
import SearchBox from "../Components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      SourceData: [],
      SearchText: "",
    };
  }
  OnSearchInput = (event) => {
    this.setState({ SearchText: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ SourceData: users }));
  }
  render() {
    const { SourceData, SearchText } = this.state;
    const FilteredArray = SourceData.filter((filter) => {
      return filter.name.toLowerCase().includes(SearchText.toLowerCase());
    });
    if (SourceData.length === 0) {
      return (
        <div className='tc ttu loading'>
          <h1>loading</h1>
        </div>
      );
    } else {
      return (
        <div className='tc'>
          <div>
            <h1 className='f1 ttu'>robo yearbook</h1>
          </div>
          <SearchBox CollectText={this.OnSearchInput} />
          <Scroll>
            <CardList arr={FilteredArray} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
