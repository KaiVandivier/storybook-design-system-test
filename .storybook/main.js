module.exports = {
  "stories": [
    // Get the Intro story to load first in order
    "../src/components/Intro.stories.mdx",
    // Automatically import all appropriate stories
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
  ]
}