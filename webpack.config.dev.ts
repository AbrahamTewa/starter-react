/* eslint-disable import/no-extraneous-dependencies */
// ============================================================
// Import packages
import DashboardPlugin from 'webpack-dashboard/plugin';
import 'webpack-dev-server';
import type webpack from 'webpack';

// ============================================================
// Import modules
import CommonConfig from './webpack.config';

// ============================================================
// Configuration
const config: webpack.Configuration = {
  ...CommonConfig,
  devServer: {
    static: {
      directory: './dist/app',
    },
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    ...(CommonConfig.plugins ?? []),
    new DashboardPlugin(),
  ],
};

// ============================================================
// Exports
export default config;
