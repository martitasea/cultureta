const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);
require('dotenv').config();

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  staticDirs: ['../static'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel'
  ],

  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        }
      }
    };
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: { builder: { useSWC: true } }
  },

  core: {
    disableTelemetry: true
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
