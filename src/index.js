import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks';

const searchClient = algoliasearch(
  'B6A58XQBJQ',
  'a0e6e4da1fd8ed1e00128001c1f7cd8d',
)

const INDEX_NAME = 'Dex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </InstantSearch>
);

