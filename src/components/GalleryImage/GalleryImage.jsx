import React, { Component } from 'react';
import { GalleryWrapper } from './GalleryImage.styled';

export default class GalleryImage extends Component {
  render() {
    return <GalleryWrapper>{this.props.children}</GalleryWrapper>;
  }
}
