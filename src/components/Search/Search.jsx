import React, { Component } from 'react';
import {
  SearchBar,
  SearchButton,
  SearchButtonText,
  SearchForm,
  SearchInput,
} from './Search.styled';

export default class Search extends Component {
  state = {
    picName: '',
  };

  handleQuery = e => {
    this.setState({ picName: e.currentTarget.value.toLowerCase() });
  };

  handleQuerySubmit = event => {
    event.preventDefault();
    if (this.state.picName.trim() === '') {
      alert('Enter the query');
      return;
    }
    this.props.onSubmit(this.state.picName);
    this.setState({ picName: '' });
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleQuerySubmit}>
          <SearchButton type="submit">
            <SearchButtonText>Search</SearchButtonText>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQuery}
            value={this.state.picName}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
