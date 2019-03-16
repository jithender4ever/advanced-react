import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Axios from 'axios';

import App from 'components/App';
import config from "../config";
import StateApi from "state-api";

const ServerRender = async () => {
  const {data: rawData} = await Axios.get(`http://${config.host}:${config.port}/data`);

  const store = new StateApi(rawData);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialState: rawData
  }
};

export default ServerRender;
