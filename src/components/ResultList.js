import React, { Component, PropTypes } from 'react';

export default class ResultList extends Component {

  render() {
    const { results } = this.props;

    if (!results.length) {
      return null;
    }

    const tableStyle = {
      marginTop: '10px',
      textAlign: 'center'
    };

    return (
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Url</th>
          </tr>
        </thead>

        <tbody>
          {
            results.map(result => {
              return (
                <tr>
                  <td>{result.id}</td>
                  <td>{result.name}</td>
                  <td><a href={result.html_url}>{result.html_url}</a></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

ResultList.propTypes = {
  results: PropTypes.array
};
