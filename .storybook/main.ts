import type {StorybookConfig} from "@storybook/react-webpack5";

const config: StorybookConfig = {
    stories: ["../src/**/__stories__/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        }
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
