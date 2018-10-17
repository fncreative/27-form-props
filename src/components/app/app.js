import "@babel/polyfill";
import React from 'react';
import superagent from 'superagent';
import SearchForm from '../search-form/search-form';
import ResultItem from '../result-item/result-item';
import Header from '../header/header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.redditResults = [];
  }

  componentDidMount = async () => {
    await this.loadResultsList()
    console.log('reddit list loaded');
  }

  loadResultsList = async (searchTerm, searchLimit) => {
    const REDDIT_API = `https://www.reddit.com/r/${searchTerm}.json?limit=${searchLimit}`;
    return superagent.get(REDDIT_API)
      .then(response => {
        if (response.body.data) {
          this.setState({redditResults: response.body.data.children});
        }
      })
      .catch(console.error);
  };

  render() {
    return (
      <main>
        <Header />
        <SearchForm
          loadResultsList = {this.loadResultsList}
        />
        <ul>
          {
            this.state.redditResults.map((currentArticle, index) => {
              <ResultItem
                article = {currentArticle}
                key = {index}
              />
            })
          }
        </ul>
      </main>
    );
  }
}

export default App;
