
module.exports = {
  stories: ['../**/stories.js'],

  webpackFinal(config) {

    // uncomment to remove @babel/plugin-transform-react-constant-elements
    // const rule = config.module.rules.find(({use}) => use.find(({loader}) => loader === 'babel-loader'))
    // const use = rule.use.find(({loader}) => loader === 'babel-loader');
    // const pluginIndex = use.options.plugins.findIndex((plugin) => plugin.includes('@babel/plugin-transform-react-constant-elements'));
    // use.options.plugins.splice(pluginIndex, 1);

    return config;
  }
};