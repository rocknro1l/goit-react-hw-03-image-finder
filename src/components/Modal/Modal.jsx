import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEscHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEscHandler);
  }

  closeOnEscHandler = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={this.props.largeImage} alt={this.props.tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}
