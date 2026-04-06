// サイトのベースURL
const SITE_BASE = 'https://vb06mh-ops.github.io/hiroyavolley-blog';

// ============================================================
// 1. シェアボタン注入
// ============================================================
function injectShareButtons(position) {
  // og:title と og:url を取得
  const title = document.querySelector('meta[property="og:title"]')?.content || document.title;
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(title);

  const html = `
  <div class="share-buttons share-${position}">
    <span class="share-label">📣 この記事をシェア</span>
    <div class="share-btn-group">
      <a href="https://twitter.com/intent/tweet?text=${text}&url=${url}&via=machikawahiroya"
         target="_blank" rel="noopener" class="share-btn share-x">
        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.902-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        X でシェア
      </a>
      <a href="https://social-plugins.line.me/lineit/share?url=${url}"
         target="_blank" rel="noopener" class="share-btn share-line">
        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C6.48 2 2 6.25 2 11.5c0 3.12 1.6 5.9 4.1 7.7-.18.6-.6 2.2-.69 2.54-.1.4.15.4.3.29.12-.08 1.9-1.29 2.67-1.82.5.07 1.02.11 1.55.11 5.52 0 10-4.25 10-9.5S17.52 2 12 2z"/></svg>
        LINE
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${url}"
         target="_blank" rel="noopener" class="share-btn share-fb">
        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Facebook
      </a>
    </div>
  </div>`;
  return html;
}

// ============================================================
// 2. 著者プロフィールカード注入
// ============================================================
function injectProfileCard() {
  return `
  <div class="author-profile-card">
    <div class="author-avatar-wrap">
      <div class="author-avatar-ring">
        <img src="${SITE_BASE}/images/hiroya-hero.jpg" alt="町川大弥" class="author-avatar-img"
             onerror="this.style.display='none'">
      </div>
    </div>
    <div class="author-info">
      <div class="author-name">町川大弥 / Hiroya Machikawa</div>
      <div class="author-title">バレーボール・ソフトバレー選手 | 元体育教師 | 香川県</div>
      <p class="author-bio">
        「自分を信じれば、必ず上手くなれる。」<br>
        香川県からNo.1 Playerを目指す現役プレイヤー。バレーボール・ソフトバレーの上達理論をYouTubeとブログで発信中。元体育教師の視点から、誰でも実践できる技術解説をお届けします。
      </p>
      <div class="author-social">
        <a href="https://www.youtube.com/@Hiroyavolley" target="_blank" rel="noopener" class="author-sns-btn youtube">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          YouTube フォロー
        </a>
        <a href="https://www.instagram.com/hiroya_machikawa" target="_blank" rel="noopener" class="author-sns-btn instagram">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Instagram
        </a>
        <a href="https://x.com/machikawahiroya" target="_blank" rel="noopener" class="author-sns-btn x-twitter">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.902-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          X フォロー
        </a>
      </div>
    </div>
  </div>`;
}

// ============================================================
// 3. 関連記事（全記事データ）
// ============================================================
const ALL_POSTS = [
  {id:'post-004',title:'【ソフトバレー】スパイクの打点を上げる方法',category:'バレーボール上達理論',tags:['スパイク','打点']},
  {id:'post-005',title:'【ソフトバレー】ブロックの基本とタイミング',category:'ソフトバレーボール',tags:['ブロック']},
  {id:'post-006',title:'【ソフトバレー】レシーブが上達する3つのコツ',category:'バレーボール上達理論',tags:['レシーブ']},
  {id:'post-007',title:'【ソフトバレー】サーブの種類と使い分け',category:'ソフトバレーボール',tags:['サーブ']},
  {id:'post-008',title:'【ソフトバレー】トスの精度を上げる練習法',category:'バレーボール上達理論',tags:['トス']},
  {id:'post-009',title:'【ソフトバレー】アタックラインの使い方',category:'ソフトバレーボール',tags:['スパイク']},
  {id:'post-010',title:'【ソフトバレー】フローターサーブの打ち方',category:'バレーボール上達理論',tags:['サーブ']},
  {id:'post-011',title:'【ソフトバレー】チームの連携を高める方法',category:'ソフトバレーボール',tags:['連携']},
  {id:'post-012',title:'【ソフトバレー】ジャンプ力を上げるトレーニング',category:'バレーボール上達理論',tags:['トレーニング']},
  {id:'post-013',title:'【ソフトバレー】スパイクの腕の振り方',category:'バレーボール上達理論',tags:['スパイク']},
  {id:'post-014',title:'【ソフトバレー】アンダーレシーブの基本フォーム',category:'ソフトバレーボール',tags:['レシーブ']},
  {id:'post-015',title:'【ソフトバレー】オーバーハンドパスの安定化',category:'バレーボール上達理論',tags:['トス']},
  {id:'post-016',title:'【ソフトバレー】ブロックのフォーメーション',category:'ソフトバレーボール',tags:['ブロック']},
  {id:'post-017',title:'【ソフトバレー】スパイクの助走とタイミング',category:'バレーボール上達理論',tags:['スパイク']},
  {id:'post-018',title:'【ソフトバレー】試合で使えるフェイント技術',category:'ソフトバレーボール',tags:['スパイク','フェイント']},
  {id:'post-019',title:'【ソフトバレー】サービスエースを狙うコース',category:'バレーボール上達理論',tags:['サーブ']},
  {id:'post-020',title:'【ソフトバレー】ディグの反応速度を上げる',category:'ソフトバレーボール',tags:['レシーブ']},
  {id:'post-021',title:'【ソフトバレー】セッターの役割と動き方',category:'バレーボール上達理論',tags:['トス']},
  {id:'post-022',title:'【ソフトバレー】レフトからのクロススパイク',category:'ソフトバレーボール',tags:['スパイク']},
  {id:'post-023',title:'【ソフトバレー】サーブレシーブのポジション',category:'バレーボール上達理論',tags:['レシーブ','サーブ']},
  {id:'post-024',title:'【ソフトバレー】ブロックアウトを狙う打ち方',category:'ソフトバレーボール',tags:['スパイク','ブロック']},
  {id:'post-025',title:'【ソフトバレー】体幹トレーニングの重要性',category:'バレーボール上達理論',tags:['トレーニング']},
  {id:'post-026',title:'【ソフトバレー】バックアタックの習得方法',category:'ソフトバレーボール',tags:['スパイク']},
  {id:'post-027',title:'【ソフトバレー】ラリーを制する粘りのレシーブ',category:'バレーボール上達理論',tags:['レシーブ']},
  {id:'post-028',title:'【ソフトバレー】スパイクの打ち分けテクニック',category:'ソフトバレーボール',tags:['スパイク']},
  {id:'post-029',title:'【ソフトバレー】ジャンプサーブの基礎',category:'バレーボール上達理論',tags:['サーブ']},
  {id:'post-030',title:'【ソフトバレー】ブロックとレシーブの連携',category:'ソフトバレーボール',tags:['ブロック','レシーブ']},
  {id:'post-031',title:'【ソフトバレー】試合前のウォームアップ',category:'バレーボール上達理論',tags:['トレーニング']},
  {id:'post-032',title:'【ソフトバレー】スパイクの威力を高める筋トレ',category:'ソフトバレーボール',tags:['トレーニング','スパイク']},
  {id:'post-033',title:'【ソフトバレー】メンタルの鍛え方',category:'Mamba Mentality',tags:['メンタル']},
  {id:'post-034',title:'【ソフトバレー】試合で緊張しないための準備',category:'Mamba Mentality',tags:['メンタル']},
  {id:'post-035',title:'【ソフトバレー】継続が力をつくる習慣術',category:'今日が人生で一番若い日',tags:['メンタル','習慣']},
];

function injectRelatedPosts(currentId, currentCategory) {
  const related = ALL_POSTS.filter(p => p.id !== currentId && p.category === currentCategory).slice(0, 3);
  if (related.length === 0) return '';

  const cards = related.map(p => `
    <a href="${SITE_BASE}/posts/${p.id}.html" class="related-card">
      <div class="related-thumb">
        <span class="related-cat">${p.category}</span>
      </div>
      <div class="related-info">
        <p class="related-title">${p.title}</p>
      </div>
    </a>
  `).join('');

  return `
  <section class="related-posts">
    <h3 class="related-heading">📚 関連記事</h3>
    <div class="related-grid">${cards}</div>
  </section>`;
}

// ============================================================
// 4. giscusコメント注入
// ============================================================
function injectGiscus() {
  return `
  <section class="comments-section">
    <h3 class="comments-heading">💬 コメント・感想</h3>
    <p class="comments-note">コメントにはGitHubアカウントが必要です。ご質問・感想をお気軽にどうぞ！</p>
    <script src="https://giscus.app/client.js"
      data-repo="vb06mh-ops/hiroyavolley-blog"
      data-repo-id="R_kgDONzPqZA"
      data-category="General"
      data-category-id="DIC_kwDONzPqZM4Cl6Wy"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="dark"
      data-lang="ja"
      crossorigin="anonymous"
      async>
    </scr` + `ipt>
  </section>`;
}

// ============================================================
// 5. メイン処理（DOMContentLoaded後に実行）
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // 記事メインコンテンツのコンテナを特定
  const postBody = document.querySelector('.post-body, .post-content, article .content, .article-body');
  if (!postBody) return;

  // 現在のページIDとカテゴリを取得
  const currentId = window.location.pathname.split('/').pop().replace('.html', '');
  const categoryMeta = document.querySelector('meta[name="article:category"]');
  const currentCategory = categoryMeta ? categoryMeta.content : 'バレーボール上達理論';

  // 記事冒頭にシェアボタン追加
  postBody.insertAdjacentHTML('beforebegin', injectShareButtons('top'));

  // 記事末尾にシェアボタン・プロフィール・関連記事・コメントを追加
  postBody.insertAdjacentHTML('afterend',
    injectShareButtons('bottom') +
    injectProfileCard() +
    injectRelatedPosts(currentId, currentCategory) +
    injectGiscus()
  );
});
