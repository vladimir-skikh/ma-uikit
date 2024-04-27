const getStyleDictionaryConfig = (tokenGroup) => {
  return {
    "source": [
      `sd/tokens/_${tokenGroup}/**/*.json`
    ],
    "platforms": {
      "css": {
        "transformGroup": "css",
        "transforms": ["name/cti/kebab", "size/px"],
        "prefix": `ma`,
        "buildPath": `src/components/Theme/_${tokenGroup}/`,
        "files": [
          {
            "destination": `Theme_${tokenGroup}.css`,
            "format": "css/variables",
            "selector": '.MaKitTheme'
          }
        ]
      }
    }
  }
}

module.exports = getStyleDictionaryConfig;