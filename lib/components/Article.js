import React from 'react';
import PropTypes from 'prop-types';
import StoreContext from './StoreContext';

const lookupAuthor = (author) => (
        <div>
            {author.firstName} {author.lastName}
        </div>
    );

export const Article = ({article, author}) => {
    return (
      <div className={'item'}>
          <div className={'content'}>
              <div className={'header'}>{article.title}</div>
              <div className={'description'}>
                  {lookupAuthor(author)}
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
            { store => {
                    const author = store.lookupAuthor(article.authorId);
                    return <Article article={article} author={author}/>
                }
            }
        </StoreContext.Consumer>
    )
};

export default ArticleContainer;
