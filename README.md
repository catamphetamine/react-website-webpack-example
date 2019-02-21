An example of using [`react-website`](https://github.com/catamphetamine/react-website) with Webpack.

## Development

```sh
npm install
npm start
```

Then go to [`http://localhost:1234`](http://localhost:1234).

## Production

```sh
npm run build
```

See the `dist` directory for the output files. The output files can be uploaded to the cloud (e.g. Amazon S3) and hosted for a very low price as a "static" website by mapping any URL to `index.html`.

## Explanation

This sample project illustrates the use of [`react-website`](https://github.com/catamphetamine/react-website) library for building a React/Redux application.

See [`react-website-basic-example`](https://github.com/catamphetamine/react-website-basic-example) first. This example project showcases `@preload()` decorator and setting up `react-hot-loader`.

Webpack is used for bundling the app.

The "Basic" page has no `@preload()` decorator so it loads instantly.

The "Advanced" page has `@preload()` decorator which emulates a lengthy HTTP request and when navigating to it a "preload" spinner will show up.

This example shows the use of `@preload()` indicator:

* Adding `@preload()` to the "Advanced" page.
* Adding `<Preload/>` to `App.js` so that a spinner is shown when navigating to a page having `@preload()` (for example, when clicking "Advanced" link in the main menu).
* (optional) Setting `showPreloadInitially: true` in `react-website.js` so that the website shows a spinner during the initial load if the page being loaded has `@preload()` (instead of just showing a blank page until the page loads initially).
* Importing the required styles: `react-website/components/Loading.css` and `react-website/components/LoadingIndicator.css` in `App.js`.

This example also shows the process of setting up `react-hot-loader`:

* Passing `hot` parameter from `import { hot } from 'react-hot-loader'` in `react-website.js`.
* The `module.hot.accept` setup in `render.js`.
* The addition of `react-hot-loader/babel` plugin in `babel.config.js`.

`react-website` library packs a lot of utilities not showcased here for sake of simplicity, such as [making `http` requests](https://github.com/catamphetamine/react-website#http-utility), [setting `<meta/>` tags](https://github.com/catamphetamine/react-website#setting-title-and--tags), [programmatic navigation](https://github.com/catamphetamine/react-website#changing-current-location), and more...