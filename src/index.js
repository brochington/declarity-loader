function transform(source, map) {
    const resourcePath = JSON.stringify(this.resourcePath);

    const prependText = `/** @jsx Declarity.createEntity */`;

    const appendText = `
if (module.hot) {
    var next = require(${resourcePath})
    var cryptoObj = window.crypto || window.msCrypto; // for IE 11

    if (!global.__DECLARITY_HOT_LOADER__) {
        global.__DECLARITY_HOT_LOADER__ = {}
        console.log('Declarity hot loader is active');
    }

    global.__DECLARITY_HOT_LOADER__[${resourcePath}] = next;

    if (module.__proto__ && module.__proto__.exports && module.__proto__.exports.default) {
      module.__proto__.exports.default.__declarity_location = ${resourcePath}
      module.__proto__.exports.default.__declarity_id = cryptoObj ? cryptoObj.getRandomValues(new Uint8Array(20)) : Math.random();
    } else if (module.exports && module.exports.default) {
      module.exports.default.__declarity_location = ${resourcePath}
      module.exports.default.__declarity_id = cryptoObj ? cryptoObj.getRandomValues(new Uint8Array(20)) : Math.random();
    }
}
`;

    this.callback(null, [prependText, source, appendText].join('\n\n'));
};

module.exports = transform;
