// search-index.jsonを読み込んで検索する
let fuseInstance = null;
let searchData = [];

async function initSearch() {
  try {
    const res = await fetch('/hiroyavolley-blog/search-index.json');
    searchData = await res.json();
    fuseInstance = new Fuse(searchData, {
      keys: ['title', 'description', 'category'],
      threshold: 0.4,
      includeScore: true
    });
  } catch (e) {
    console.log('Search index not found');
  }
}

function performSearch(query) {
  if (!fuseInstance || !query.trim()) return [];
  return fuseInstance.search(query).slice(0, 10).map(r => r.item);
}

function renderSearchResults(results, container) {
  if (results.length === 0) {
    container.innerHTML = '<p class="search-no-results">記事が見つかりませんでした。</p>';
    return;
  }
  container.innerHTML = results.map(post => `
    <a href="${post.url}" class="search-result-item">
      <span class="search-result-cat">${post.category}</span>
      <span class="search-result-title">${post.title}</span>
      <span class="search-result-desc">${post.description}</span>
    </a>
  `).join('');
}

// searchページ用
document.addEventListener('DOMContentLoaded', async () => {
  await initSearch();

  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  if (!input || !results) return;

  // URLパラメータからクエリ取得
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q) {
    input.value = q;
    renderSearchResults(performSearch(q), results);
  }

  input.addEventListener('input', () => {
    renderSearchResults(performSearch(input.value), results);
  });
});

// ヘッダー検索窓用（blog.htmlなど）
window.openSearch = function(query) {
  window.location.href = `/hiroyavolley-blog/search.html?q=${encodeURIComponent(query)}`;
};
