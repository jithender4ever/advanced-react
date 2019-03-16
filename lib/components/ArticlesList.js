import React from 'react';
import Article from "./Article";
import PropTypes from 'prop-types';

const ArticlesList = (props) => {

    const renderArticle = () => {
        return Object.values(props.articles).map(article => <Article  key={article.id}
                                                                   article={article}/>)
    };

    return (
      <div className={'ui relaxed divided list'}>
          { props.articles && renderArticle() }
      </div>
    );
};

ArticlesList.propTypes = {
    articles: PropTypes.object.isRequired
};

export default ArticlesList;
