import React from 'react';
import Article from "./Article";

const ArticlesList = (props) => {

    const renderArticle = () => {
        return Object.values(props.articles).map(article => <Article  key={article.id}
                                                                   article={article}
                                                                   store={props.store} />)
    };

    return (
      <div className={'ui relaxed divided list'}>
          { props.articles && renderArticle() }
      </div>
    );
};

export default ArticlesList;
