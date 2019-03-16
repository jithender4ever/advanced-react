import React, {Component} from 'react';
import ArticlesList from "./ArticlesList";
import StoreContext from './StoreContext';

class App extends Component {

    state = this.props.store.getState();

    articleActions = {
      lookupAuthor: (authorId) => this.state.authors[authorId]
    };

    render() {
        return (
            <div className={'ui segment'}>
                <StoreContext.Provider value={this.props.store}>
                    <ArticlesList articles={this.state.articles}/>
                </StoreContext.Provider>
            </div>
        );
    }
}

export default App;
