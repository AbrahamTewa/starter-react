import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5') as '@storybook/react-webpack5',
    options: {},
  },
  stories: [
    '../components/src/**/*.stories.ts',
    '../components/src/atoms/Input.stories.ts',
  ],
  async webpackFinal(webpackConfig) {
    return {
      ...webpackConfig,
      module: {
        ...webpackConfig.module,
        rules: [
          ...(webpackConfig.module?.rules || []),
          {
            exclude: /node_modules/,
            test: /\.tsx?$/,
            use: 'ts-loader',
          },
        ],
      },
    };
  },
};

export default config;
