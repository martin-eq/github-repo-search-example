import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {

  render() {
    const { doSearchCall, onChangeSearchTerm } = this.props;

    const searchInputType = {
      marginRight: '10px',
      width: '80%'
    };

    return (
      <form onSubmit={doSearchCall}>
        <input type="text" placeholder="Enter GitHub Username" style={searchInputType} onChange={onChangeSearchTerm} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

SearchBar.propTypes = {
  doSearchCall: PropTypes.func.isRequired,
  onChangeSearchTerm: PropTypes.func.isRequired
};
