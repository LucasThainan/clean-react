import { defineConfig } from 'cypress'
import webpackPreprocessor from '@cypress/webpack-preprocessor'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    fixturesFolder: false,
    supportFile: false,
    specPattern: 'src/main/test/cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpackPreprocessor({
        // webpackOptions: require('./webpack.config'),
        webpackOptions: {
          resolve: {
            extensions: ['.ts', '.js']
          },
          module: {
            rules: [{
              test: /\.ts$/,
              exclude: /node_modules/,
              loader: 'ts-loader'
            }]
          }
        }
      }))
    }
  }
})
