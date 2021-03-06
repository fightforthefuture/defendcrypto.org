# DefendCrypto.org

> A Kin & Fight for the Future website 

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Deploying Changes

This site is hosted using [GitHub Pages](https://pages.github.com/) and [Cloudflare](https://www.cloudflare.com/). When changes are pushed to master, the site is generated by [CircleCI](https://circleci.com/gh/fightforthefuture/defendcrypto.org) and pushed to the [gh-pages](https://github.com/fightforthefuture/defendcrypto.org/tree/gh-pages) branch. You can see how it works [here](https://github.com/fightforthefuture/defendcrypto.org/blob/master/.circleci/config.yml#L29).

If you have write access to this GitHub project, you can manually deploy the site like this:
```
npm run generate
npm run deploy
```

## Leaderboard

The leaderboard is generated by [this script](https://github.com/fightforthefuture/defendcrypto.org/blob/master/scripts/generate-leaderboard.js) whenever `npm run generate` is run. We have a cron task set up that triggers a new CircleCI build every few minutes to update the site.
