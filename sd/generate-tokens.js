const StyleDictionary = require('style-dictionary');
const getStyleDictionaryConfig = require('./getStyleDictionaryConfig');

const tokenGroups = [
  'color',
  'space',
  'shadow',
  'radius',
  'font',
];

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function(dictionary, config) {
    return this.selector + ' {\n' +
      dictionary.allProperties.map(prop => `  --${prop.name}: ${prop.value};`).join('\n') +
    '\n}\n'
  }
});

tokenGroups.forEach((tokenGroup) => {
  const tokenGroupStyleDictionary = StyleDictionary.extend(getStyleDictionaryConfig(tokenGroup))

  tokenGroupStyleDictionary.buildAllPlatforms();
});
