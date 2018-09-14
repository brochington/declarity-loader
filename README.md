# declarity-loader

a webpack loader for [Declarity](https://github.com/brochington/declarity)

```
npm install --save-dev declarity-loader
```

Currently only webpack > 4 is supported.

Babel > 7 and [Babel React Preset](https://babeljs.io/docs/plugins/preset-react/) are currently dependencies used in the parsing of JSX syntax.

## Example

```javascript

/* In .babelrc */
{
  "presets": ["react"]
}

/* In webpack.config.js */
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.dsx$/,
            use: ['babel-loader', 'declarity-loader'],
            include: path.join(__dirname, 'src/entities')
        }]
    },
    ...
}
```

In this example a new filetype, .dsx, is used to help distinguish how the different JSX should be parsed.
