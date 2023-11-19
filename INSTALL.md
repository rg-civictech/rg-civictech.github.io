Gatsby Blog
===

* [公式 Gatsby](https://www.gatsbyjs.com/)
* [gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/)


gatsby-starter-blogにページネーションを追加する
https://zenn.dev/piruty/articles/a16398ae17496831b6d3

### info
* [GatsbyとGitHub Pagesで作るMarkdownブログ](https://kanamesasaki.github.io/blog/20220124-gatsby-blog/)
* [Gatsby + GitHub Pages でポートフォリオページを無料でシュッと作る ](https://qiita.com/mishiwata1015/items/ac65efbabb4400fd95bf)
* [基礎から始めるGatsbyJS入門](https://reffect.co.jp/react/gatsby-basic-tutorial-for-beginners)
* [GatsbyJsでgatsby-starter-blogを使ったサイトの作成](https://www.kohsuk.tech/articles/2020-11-25)

### install

init
```
$ gatsby new rg-civictech https://github.com/gatsbyjs/gatsby-starter-blog
$ cd rg-civictech
$ gatsby develop
```

debug view
```
You can now view gatsby-starter-hello-world in the browser.
http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
http://localhost:8000/___graphql
```
⠀
build
```
$ gatsby build
-->　/public directory
```

.env load module
```
$ npm install --save dotenv
```

### ページネーション

```
$ npm install --save gatsby-awesome-pagination
```

* [Gatsbyブログのページネーションの作り方](https://monotein.com/blog/making-pagination-for-gatsby-blog)
* [gatsby-starter-blogにページネーションを追加する](https://zenn.dev/piruty/articles/a16398ae17496831b6d3)

