# 町川大弥 公式ブログ — GitHub Pages 公開手順

> 香川から、日本一へ。継続が、最強の才能だ。

---

## はじめに

このサイトは **GitHub Pages** で無料公開できます。
サーバー代・ドメイン代なし。GitHubアカウントさえあれば今日から公開できます。

---

## Step 1：GitHubアカウントを作る（初回のみ・約5分）

1. https://github.com にアクセス
2. 右上の「**Sign up**」をクリック
3. メールアドレス・パスワード・ユーザー名を入力
   - ユーザー名はURLに使われます（例：`hiroyavolley` → `hiroyavolley.github.io`）
4. メールの確認リンクをクリックして登録完了

---

## Step 2：リポジトリ（保存場所）を作る（初回のみ・約3分）

1. ログイン後、右上の「**+**」→「**New repository**」をクリック
2. Repository name に `hiroyavolley-blog` と入力
3. **「Public」** を選択（無料公開に必要）
4. 「**Create repository**」をクリック

---

## Step 3：ファイルをアップロードする（初回・約15分）

1. 作成したリポジトリのページで「**uploading an existing file**」をクリック
2. このフォルダの全ファイルをドラッグ＆ドロップ
   - `posts/` フォルダごとドラッグしてください
3. 下部の「**Commit changes**」をクリック

---

## Step 4：GitHub Pages を有効にする（初回のみ・約2分）

1. リポジトリ上部の「**Settings**」タブをクリック
2. 左メニューの「**Pages**」をクリック
3. Source の「**Deploy from a branch**」を選択
4. Branch：「**main**」→「**/(root)**」→「**Save**」をクリック
5. 数分後に以下の URL でサイトが公開されます：

```
https://（あなたのユーザー名）.github.io/hiroyavolley-blog/
```

---

## 記事を追加する方法（毎回の作業）

### admin.html を使う（推奨・HTMLの知識不要）

1. `admin.html` をブラウザで開く（ファイルをダブルクリック）
2. フォームに記事内容を入力する
3. 「**記事HTMLを生成する**」ボタンをクリック
4. 生成されたHTMLを「**全部コピーする**」
5. メモ帳（Windows）またはテキストエディット（Mac）を開いて貼り付け
6. ファイル名「`post-004.html`」で `posts/` フォルダに保存
   - 数字は記事ごとに1つ増やす（post-005、post-006…）
7. GitHubのリポジトリページを開く
8. 「**posts**」フォルダをクリック →「**Add file**」→「**Upload files**」
9. 保存したHTMLファイルをアップロード
10. 「**Commit changes**」をクリック → **完了！**

### blog.html の記事リストも更新する

`admin.html` で生成された「**blog.htmlに追加するコード**」もコピーして、
`blog.html` の `<div class="blog-grid">` の中に貼り付けてください。

---

## ファイル構成

```
hiroyavolley-blog/
├── index.html          トップページ
├── about.html          プロフィールページ
├── blog.html           ブログ記事一覧
├── admin.html          記事投稿管理画面（ローカルで使用）
├── style.css           全ページ共通スタイル
├── admin.css           管理画面専用スタイル
├── README.md           この手順書
└── posts/
    ├── post-001.html   サンプル記事1
    ├── post-002.html   サンプル記事2
    ├── post-003.html   サンプル記事3
    └── post-004.html   ← 追加記事はここに
```

---

## よくある質問

**Q: URLを独自ドメイン（例：hiroyavolley.com）にしたい**
A: お名前.com 等でドメインを取得（年間1,000円程度）し、GitHub Pages の Custom Domain に設定できます。

**Q: 画像を使いたい**
A: `images/` フォルダを作って GitHub にアップロード後、HTML で `<img src="../images/ファイル名.jpg">` と参照できます。

**Q: 記事を修正したい**
A: GitHub のファイル一覧から対象ファイルを選び、鉛筆アイコン（Edit）で直接編集できます。

**Q: admin.html はネットに公開されてしまう？**
A: admin.html はブラウザ上で動くだけで、データを送信する機能はありません。公開されても問題ありませんが、気になる場合はアップロード対象から除外してください。

---

*© 2024 Hiroya Machikawa | 香川県バレーボール・ソフトバレー*
