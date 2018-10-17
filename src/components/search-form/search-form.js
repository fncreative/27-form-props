import React from 'react';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.searchTerm = this.props.title || '';
    this.state.searchLimit = this.props.searchLimit || 10;
  };

  handleSearchTerm = event => {
    this.setState({searchTerm: event.target.value})
  };

  handleSearchLimit = event => {
    this.setState({searchLimit: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loadResultsList(this.state.searchTerm, this.state.searchLimit);
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          name='search-term'
          placeholder='Search reddit'
          value={ this.props.searchTerm }
          onChange={ this.handleSearchTerm }
        />
        <input
          name='search-limit'
          placeholder='How many results?'
          value={ this.props.searchLimit }
          onChange={ this.handleSearchLimit }
          required
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
