import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsFeed from './NewsFeed';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewsFeed />, document.getElementById('App'));
registerServiceWorker();
