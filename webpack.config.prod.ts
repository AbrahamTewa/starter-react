/* eslint-disable import/no-extraneous-dependencies */
// ============================================================
// Import packages
import type webpack from 'webpack';

// ============================================================
// Import modules
import CommonConfig from './webpack.config';

// ============================================================
// Configuration
const config: webpack.Configuration = {
  ...CommonConfig,
  devtool: 'source-map',
  mode: 'production',
};

// ============================================================
// Exports
export default config;
