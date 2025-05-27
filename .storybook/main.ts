import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  viteFinal: (config) => {
    config.build = {
      ...config.build,
      chunkSizeWarningLimit: 1500, // raise the limit to avoid warning
    };
    return config;
  },
  stories: ["../src/**/*.stories.{js,jsx,ts,tsx}"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
