import React from 'react';

const lookupAuthor = (actions, authorId) => {
    const author = actions.lookupAuthor(authorId);
    return (
        <div>
            {author.firstName} {author.lastName}
        </div>
    );
};


const Article = ({article, actions}) => {
    return (
      <div className={'item'}>
          <div className={'content'}>
              <div className={'header'}>{article.title}</div>
              <div className={'description'}>{lookupAuthor(actions, article.authorId)}</div>
          </div>
      </div>
    );
};

export default Article;
