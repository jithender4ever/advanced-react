import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

const initialContent = window.initialContent;

ReactDOM.render(<App initialContent={initialContent} />, document.getElementById('root'));
