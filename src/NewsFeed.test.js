import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeed from './NewsFeed';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsFeed />, div);
});