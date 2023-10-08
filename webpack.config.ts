/* eslint-disable import/no-extraneous-dependencies */
// ============================================================
// Import packages
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import 'dotenv/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type webpack from 'webpack';

// ============================================================
// Configuration
const config: webpack.Configuration = {
  context: path.resolve(__dirname, 'app'),
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/app'),
  },
  plugins: [
    new DefinePlugin({
      CI_COMMIT_SHA: JSON.stringify(process.env.CI_COMMIT_SHA),
      PACKAGE_NAME: JSON.stringify(process.env.npm_package_name),
      PACKAGE_VERSION: JSON.stringify(process.env.npm_package_version),
      SENTRY_DSN: JSON.stringify(process.env.SENTRY_DSN),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.resolve(__dirname, './reports/build-reports.html'),
    }),
    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

// ============================================================
// Exports
export default config;
