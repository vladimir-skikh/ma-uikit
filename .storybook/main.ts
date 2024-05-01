import type {StorybookConfig} from "@storybook/react-webpack5";
import * as path from "path";
import postcssMixins from 'postcss-mixins';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';

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
            name: '@storybook/addon-styling-webpack',
            options: {
                rules: [
                    {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: () => [
                                            postcssMixins,
                                            autoprefixer,
                                            postcssImport,
                                            postcssNested,
                                        ],
                                    },
                                }
                            },
                        ],
                    },
                ]
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
    webpackFinal: async (config) => {
        config.module.rules = [
            ...config.module.rules,
            {
                test: /.*\.(ttf|eot|woff|woff2|gif|png|jpe?g)$/i,
                type: 'asset/resource',
            },
        ];

        console.log({
            name: 'webpackFinal',
            value: config.module.rules
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            '##': path.resolve(__dirname, "../src"),
        };

        return config;
    },
};
export default config;
