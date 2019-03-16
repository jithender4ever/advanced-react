import React from 'react';
import PropTypes from 'prop-types';
import StoreContext from './StoreContext';

const lookupAuthor = (store, authorId) => {

    const author = store.lookupAuthor(authorId);

    return (
        <div>
            {author.firstName} {author.lastName}
        </div>
    );
};

const Article = ({article, store}) => {
    return (
      <div className={'item'}>
          <div className={'content'}>
              <div className={'header'}>{article.title}</div>
              <div className={'description'}>
                  {lookupAuthor(store, article.authorId)}
              </div>
          </div>
      </div>
    );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired
  })
};


const ArticleContainer = ({article}) => {
    return (
        <StoreContext.Consumer>
            { store => <Article article={article} store={store}/> }
        </StoreContext.Consumer>
    )
};

export default ArticleContainer;
