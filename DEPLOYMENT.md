build & deployment
====

how_to_release.mdも参照

### 記事追加

'/content/blog/{日付}'にMarkdown形式のファイルを追加＆記述する.

例)
```
/content/blog/20231119/index.md
```

Markdownフォーマット.  
ヘッダに下記を記述
```
---
title: (ブログタイトル)
date: (日付) 
description: (説明)
---
```


### build & deployment

publicディレクトリにビルド
```
$ gatsby build
---> publicディレクトリにビルド結果が出力される
```

GitHub Pageにpublicディレクトリの内容をデプロイ
```
$ gh-pages -d public
```
