import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    const fileLoaderRule = config.module?.rules?.find(
      (rule) =>
        rule && typeof rule === 'object' && rule.test instanceof RegExp && rule.test.test('.svg')
    ) as RuleSetRule | undefined;

    if (!fileLoaderRule) {
      throw new Error('Не найдено правило загрузки для SVG.');
    }

    config.module?.rules?.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: {
          not: [/url/],
        },
        use: ['@svgr/webpack'],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
