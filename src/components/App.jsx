import React, { Component } from 'react';
import Search from './Search/Search';

export class App extends Component {
  state = {
    picName: '',
  };

  handleFormSubmit = picName => {
    this.setState({ picName });
  };

  render() {
    return <Search onSubmit={this.handleFormSubmit} />;
  }
}
