import path from 'path'
import webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

type Config = {
  config: webpack.Configuration
}

export default ({ config }: Config) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  if (config.module?.rules) {
    let { rules } = config.module

    rules = rules.map((rule: webpack.RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  config.module?.rules?.push(buildCssLoader(true))

  return config
}
