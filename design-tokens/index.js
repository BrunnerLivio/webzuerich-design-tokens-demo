const StyleDictionaryPackage = require('style-dictionary');

const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

function getStyleDictionaryConfig(theme) {
  return {
    source: [
      'properties/globals/**/*.json',
      `properties/themes/${theme}/*.json`,
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `build/css/${theme}/`,
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
          },
        ],
      },
      android: {
        transformGroup: 'android',
        buildPath: `build/android/${theme}/`,
        files: [
          {
            destination: 'font_dimens.xml',
            format: 'android/fontDimens',
          },
          {
            destination: 'colors.xml',
            format: 'android/colors',
          },
        ],
      },
    },
  };
}

getDirectories('./properties/themes').map(function (brand) {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${brand}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(brand)
  );

  StyleDictionary.buildAllPlatforms();

  console.log('\nEnd processing');
});
