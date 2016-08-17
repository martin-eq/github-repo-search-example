import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GithubActions from '../actions/GithubActions';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {

  onChangeSearchTerm(event) {
    this.setState({searchTerm: event.target.value});
  }

  doSearchCall(event) {
    const { searchTerm } = this.state;
    event.preventDefault();

    if (searchTerm) {
      return this.setState({results: []});
    }
  }

  render() {
    const { counter, actions } = this.props;
    let loadingText = null;

    if (this.props.loading) {
      loadingText = <h2>Seaching...</h2>;
    }

    return (
      <div className="main-app-container">
        <div className="main-app-nav">Github Repo Search Example</div>

        <SearchBar actions={actions} />

        {loadingText}

        <ResultList results={this.props.items} />
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    items: state.github.items,
    loading: state.github.loading
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'GithubActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GithubActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
