import React from 'react';
import PropTypes from 'prop-types';

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults() {
    return (
      <ul>
        { this.props.redditResults.map((result, index) => {
          return (
            <a href={ result.url } key = { index }><li> { result.title } </li></a>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
    <section>
      <h2>Reddit search results</h2>
      { this.renderResults(this.props.redditResults) }
    </section>
    );
  }
}
ResultItem.propTypes = {
  redditResults: PropTypes.array,
};

export default ResultItem;
