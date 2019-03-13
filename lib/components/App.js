import React, {Component} from 'react';
import Axios from 'axios';

import ArticlesList from "./ArticlesList";
import DataApi from "./DataApi";

class App extends Component {
    state = {
        articles: this.props.initialContent.articles,
        authors: this.props.initialContent.authors
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
