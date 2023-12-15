import React, { Component } from 'react';
import { GalleryItem, ItemImage } from './GalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export default class GalleryItemImage extends Component {
  state = {
    showModal: false,
  };

  handleModalToggle = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL, id } = this.props;
    return (
      <>
        <GalleryItem onClick={this.handleModalToggle} key={id}>
          <ItemImage src={webformatURL} alt={tags} />
        </GalleryItem>
        {this.state.showModal && (
          <Modal
            largeImage={largeImageURL}
            tags={tags}
            onClose={this.handleModalToggle}
          />
        )}
      </>
    );
  }
}
