//const withSass = require("@zeit/next-sass");
//module.exports = withSass({
//cssLoaderOptions: {
//importLoaders: 2
//}
//});

const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass());
