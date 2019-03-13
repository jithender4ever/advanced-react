import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Axios from 'axios';

import App from 'components/App';
import config from "../config";
import DataApi from "../components/DataApi";

const ServerRender = async () => {
  const {data: rawData} = await Axios.get(`http://${config.host}:${config.port}/data`);

  const api = new DataApi(rawData);

  const initialContent = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  return {
    initialMarkup: ReactDOMServer.renderToString(<App initialContent={initialContent} />),
    initialData: initialContent
  }
};

export default ServerRender;
