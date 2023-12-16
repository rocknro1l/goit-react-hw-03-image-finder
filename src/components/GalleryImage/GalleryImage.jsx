import React, { Component } from 'react';
import { getImages } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import GalleryItemImage from 'components/GalleryItem/GalleryItem';
import { GalleryWrapper } from './GalleryImage.styled';
import { Button } from 'components/Button/Button';

export default class GalleryImage extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { picName } = this.props;
    const { currentPage } = this.state;

    if (prevProps.picName !== picName) {
      this.setState({ pictures: [] });
      this.fetchImages(picName, 1);
    }

    if (
      prevState.currentPage !== currentPage &&
      prevProps.picName === picName
    ) {
      this.fetchImages(picName, currentPage);
    }
  }

  fetchImages = async (picName, currentPage) => {
    this.setState({ isLoading: true });

    try {
      const { hits } = await getImages(picName, currentPage);
      this.setState(prev => ({
        pictures: [...prev.pictures, ...hits],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changePageHandler = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  render() {
    const { pictures, isLoading } = this.state;
    return (
      <>
        {pictures.length ? (
          <GalleryWrapper>
            {pictures.map(el => (
              <GalleryItemImage
                key={el.id}
                webformatURL={el.webformatURL}
                largeImageURL={el.largeImageURL}
                tags={el.tags}
              />
            ))}
          </GalleryWrapper>
        ) : null}
        {isLoading && <Loader />}
        {pictures.length ? (
          <Button type="button" onClick={this.changePageHandler} />
        ) : null}
      </>
    );
  }
}
