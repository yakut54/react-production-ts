import webpack from 'webpack'

const typescriptLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

const cssLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    "css-loader",
    "sass-loader",
  ],
}

export function buildLoaders(): webpack.RuleSetRule[] {

  return [
    typescriptLoader,
    cssLoader
  ]
}