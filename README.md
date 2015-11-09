# Front-end Application Boilerplate

The boilerplate we are using build awesome web native applications.

## Installation

Install dependencies,

```bash
$ npm install
```

Run build,

```bash
$ npm run build
```

Launch application,

```bash
$ npm start
```

Open in browser,

```bash
$ open http://localhost:3000
```

## Project Structure

The sources of application is located in `/source` folder. The distributive version will be placed to `/public` folder after build. Normally, you should always use development configuration and build public version right before the deployment.

### [/source/index.html](/source/index.html)

The `index.html` file, references some CDN resources, fonts, 3rd party CSS files.

### [/source/router](/source/router)

The entry point of application. Initializes `router` and renders the application to `#main` div.

### [/source/containers](/source/containers)

The [smart]() components of application. Setting up the layout of `components` and manage the state.

### [/source/components](/source/components)

The [dump]() components, with own style, initialized via properties, stateless.

## References

* [Front-end Engineering Stack](https://github.com/blogfoster/blogfoster-engineering/wiki/Frontend-Engineering-Stack)
* [Setting Up Webpack for React and Hot Module Replacement](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement)
* [Survive.js](http://survivejs.com/webpack_react/introduction/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Smart and Dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
