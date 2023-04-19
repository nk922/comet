const path = require('path');
module.exports = {
  stories: [
    '../packages/warpspeed/src/**/*.stories.@(tsx|mdx)',
    '../packages/warpspeed-data-viz/src/**/*.stories.@(tsx|mdx)',
    '../packages/warpspeed-extras/src/**/*.stories.@(tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
