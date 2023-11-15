import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

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
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: 'tag',
  },
  framework: '@storybook/react-vite',
  stories: [
    '../components/src/**/*.stories.ts',
    '../components/src/atoms/Input.stories.ts',
  ],
};

export default config;
