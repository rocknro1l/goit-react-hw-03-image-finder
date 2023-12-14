import React, { Component } from 'react';

export default class GalleryImage extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    error: null,
    isLoading: false,
  };

  render() {
    return <div>GalleryImage</div>;
  }
}
