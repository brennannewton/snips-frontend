import { renderSnips, fetchSnippets } from './lib/snippets.js';
import search from './lib/search.js';

fetchSnippets().then(snips => {
  renderSnips(snips);
});

document.getElementById('search-bar').addEventListener('submit', search);
