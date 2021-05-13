# 公式microCMSブログ

サイト: https://blog.microcms.io/
ソースコード: https://github.com/wantainc/microcms-blog

## 機能

- 記事一覧
- カテゴリー別記事一覧
- 人気の記事一覧
- 最新の記事一覧
- 検索
- パンくずリスト
- 記事詳細
  - 目次
  - 著者
  - SNS シェアボタン
  - 下書きプレビュー
  - 関連記事
- バナー
- Google Analytics
- サイトマップ
- RSS

## 追加予定機能

- PWA

## 技術構成

- Next（SSG）
- microCMS（コンテンツ）
- Vercel（Hosting, Functions）
- ESLint
- Prettier
- PostCSS
- aspida
- pathpida
- SWR

## microCMS の API スキーマ設定

### ブログ

endpoint: blog  
type: リスト形式

| フィールド ID | 表示名     | 種類                        | 必須  |
| ------------- | ---------- | --------------------------- | ----- |
| title         | タイトル   | テキストフィールド          | true  |
| category      | カテゴリー | コンテンツ参照 - カテゴリー | true  |
| toc_visible   | 目次       | 真偽値                      | true  |
| body          | 本文       | リッチエディタ              | true  |
| description   | 概要       | テキストフィールド          | true  |
| ogimage       | OGP 画像   | 画像                        | true  |
| writer        | 著者       | コンテンツ参照 - 著者       | false |
| partner       | パートナー | コンテンツ参照 - パートナー | false |
| related_blogs | 関連記事   | 複数コンテンツ参照 - ブログ | true  |

### 著者

endpoint: authors  
type: リスト形式

| フィールド ID | 表示名   | 種類               | 必須 |
| ------------- | -------- | ------------------ | ---- |
| name          | 名前     | テキストフィールド | true |
| text          | 自己紹介 | テキストエリア     | true |
| image         | 画像     | 画像               | true |

### カテゴリー

endpoint: categories  
type: リスト形式

| フィールド ID | 表示名 | 種類               | 必須 |
| ------------- | ------ | ------------------ | ---- |
| name          | 名前   | テキストフィールド | true |

### パートナー

endpoint: partners  
type: リスト形式

| フィールド ID | 表示名   | 種類               | 必須 |
| ------------- | -------- | ------------------ | ---- |
| company       | 会社名   | テキストフィールド | true |
| url           | 会社 URL | テキストフィールド | true |
| description   | 説明文   | テキストエリア     | true |
| logo          | ロゴ     | 画像               | true |

### 人気の記事

endpoint: popular-articles  
type: オブジェクト形式

| フィールド ID | 表示名     | 種類                        | 必須 |
| ------------- | ---------- | --------------------------- | ---- |
| articles      | 人気の記事 | 複数コンテンツ参照 - ブログ | true |

### バナー

endpoint: banner  
type: オブジェクト形式

| フィールド ID | 表示名       | 種類               | 必須 |
| ------------- | ------------ | ------------------ | ---- |
| image         | 画像         | 画像               | true |
| url           | リンク先 URL | テキストフィールド | true |
| alt           | 代替テキスト | テキストフィールド | true |

## 環境変数

プロジェクトルートに`.env.local`ファイルを作成し、以下の項目を設定してください。

- API_KEY（microCMS の API キー）
- SERVICE_ID（microCMS のサービス ID）
- NEXT_PUBLIC_GOOGLE_ANALYTICS_ID（Google Analytics の ID）
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_BASE_PATH（BasePath が'/'なら空白で大丈夫です）

例:

```
API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
SERVICE_ID=your-service-id
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-xxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://blog.microcms.io
NEXT_PUBLIC_BASE_PATH=/test
```

## 開発方法

```bash
# パッケージをインストール
$ npm install

# 開発サーバーを起動（localhost:3000）
$ npm run dev

# アプリケーションを生成
$ npm run build

# 生成したアプリケーションを起動
$ npm start
```

## ライセンス

Apache License 2.0
