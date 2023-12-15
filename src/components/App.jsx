import React, { Component } from 'react';
import Search from './Search/Search';
import GalleryImage from './GalleryImage/GalleryImage';
import { AppWrapper } from './App.styled';

export class App extends Component {
  state = {
    picName: '',
  };

  handleFormSubmit = picName => {
    this.setState({ picName });
  };

  render() {
    return (
      <AppWrapper>
        <Search onSubmit={this.handleFormSubmit} />
        <GalleryImage picName={this.state.picName} />
      </AppWrapper>
    );
  }
}
