import SNIPS from './snippet-data.js';
// default import

// 1. Map over snips
// 2. Transform snip into HTML
// 3. Put HTML into snips

const renderSnips = snippets => {
  const snippetHTML = snippets
    .map(
      snippet => /* html */ `
    <div class="snip">
      <div class="text">
        <h2>${snippet.title}</h2>
        <p>${snippet.description}</p>
      </div>
      <pre><code class="${snippet.language}">${he.encode(
        snippet.code
      )}</code></pre>
    </div>`
    )
    .join('');

  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetHTML;
};

renderSnips(SNIPS);

hljs.initHighlightingOnLoad();
