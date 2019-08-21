import { renderSnips, fetchSnippets } from './snippets.js';

const search = async event => {
  // Look through SNIPS by title, description, language, and/or code
  // Filter our snips by said properties
  // Load snips
  event.preventDefault();
  const searchText = event.target['search-text'].value.toLowerCase();

  const snips = await fetchSnippets();

  const searchResults = snips.filter(
    snippet =>
      snippet.title.toLowerCase().includes(searchText) ||
      snippet.description.toLowerCase().includes(searchText) ||
      snippet.code.toLowerCase().includes(searchText) ||
      snippet.language.toLowerCase().includes(searchText)
  );
  renderSnips(searchResults);
};

export default search;
