import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: ''
    };
  }

  onChangeSearchTerm(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    const { actions } = this.props;
    event.preventDefault();

    actions.githubCall(this.state.searchTerm)
  }

  render() {
    const { doSearchCall, onChangeSearchTerm } = this.props;

    return (
      <form className="form-inline text-center mb15" onSubmit={this.onFormSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control mr5" onChange={this.onChangeSearchTerm.bind(this)} placeholder="Enter search term" />
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  actions: PropTypes.object.isRequired
};
