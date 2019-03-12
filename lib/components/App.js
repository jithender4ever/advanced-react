import React, {Component} from 'react';
import data from '../testData';
import DataApi from './DataApi';
import ArticlesList from "./ArticlesList";

const api = new DataApi(data);

class App extends Component {

    state = {
        articles: api.getArticles(),
        authors: api.getAuthors()
    };

    articleActions = {
      lookupAuthor: (authorId) => this.state.authors[authorId]
    };

    render() {
        return (
            <div className={'ui segment'}>
                <ArticlesList articles={this.state.articles} articleActions={this.articleActions} />
            </div>
        );
    }
}

export default App;
