import React, {Component} from 'react';
import ArticlesList from "./ArticlesList";

class App extends Component {

    state = this.props.store.getState();

    articleActions = {
      lookupAuthor: (authorId) => this.state.authors[authorId]
    };

    render() {
        return (
            <div className={'ui segment'}>
                <ArticlesList articles={this.state.articles} store={this.props.store} />
            </div>
        );
    }
}

export default App;
