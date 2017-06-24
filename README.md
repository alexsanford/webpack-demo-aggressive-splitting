This example demonstrates extracting shared dependencies in Webpack using AggressiveSplittingPlugin.

In the example, `lodash` is imported by `join.js` and `wisdom.js`, and `join.js` is imported by `greeting.js` and `timestamp.js`. Without using AggressiveSplittingPlugin, `lodash` is duplicated between all of the chunks. When using the plugin, however, `lodash` is placed in its own chunk. That chunk is loaded the first time it is needed, and then shared after that point.

You can see this by running the example (`npm start`), visiting `http://localhost:3000/`, and clicking on each button on the page while watching the JavaScript files being loaded at each stage.

To see the behavior _without_ AggressiveSplitPlugin, remove the plugin from `webpack.config.js`, restart the app, and reload the page. Now each JS file that gets loaded is much larger, since each one contains all of `lodash`.
