# Router issue reproducer

## 🐛 Issue
Find the issue here: https://github.com/sveltejs/kit/issues/6914

- On the `main` branch you'll find an exemple of what is expected, using the `export const router = false;`. 
- On the `reproducer` branch you'll find an example with upgraded version of sveltekit without `export const router = false;` (replaced in [this PR](https://github.com/sveltejs/kit/pull/6446)) and trying to use `data-sveltekit-reload` as workaround.

For convience, [here](https://github.com/MaximeMenotti/sveltekit-router-issue-reproducer/pull/1/files) is the comparaison between those two branches.

## 🚀 Usage

### 🐳 With docker
To run content renderer and all consumers please use following command:
```shell
docker-compose up
```

### ✋ Without docker
1. Run svelte-content-renderer
```shell
cd svelte-content-renderer
yarn install
yarn build
node ./server.js
```

2. Run next-js consumer
```shell
cd next-js-consumer
yarn install
yarn build
yarn start
```

## 🙏 Expected result
Navigating to http://localhost:3001 you should arrive on the homepage of receiving site.

By clinking on `Svelte integrated content` on the navbar you should get a page with the navbar and footer rendered by the host site and a content rendered by the svelte-content-renderer. 

If you click to the Homepage link, the router of sveltekit should not interfer and you should see the host site homepage. 

If you see the message "This page should not be displayed" is that the sveltekit router handle the link click.

