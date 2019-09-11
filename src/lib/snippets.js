import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlightjs';
import Snip from '../components/Snip.js';

export const highlightSnips = () => {
  const snips = document.querySelectorAll('pre code');
  snips.forEach(hljs.highlightBlock);
};

// 1. Map over snips
// 2. Transform snip into HTML
// 3. Put HTML into snips

export const renderSnips = snippets => {
  ReactDOM.render(<Snip />, document.getElementById('snippets'));
  /*
  const snippetHTML = snippets.map(Snip).join('');

  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetHTML;

  highlightSnips();
  */
};

export const fetchSnippets = () =>
  fetch('http://localhost:5000/api/snippets').then(response => response.json());
