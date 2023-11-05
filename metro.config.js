const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptionsAsync() {
      return {
        transformer: {
          babelTransformerPath: require.resolve('react-native-svg-transformer'),
        },
      };
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
