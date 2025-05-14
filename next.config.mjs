import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Configure analytics and speed insights to be automatically injected
  analytics: {
    enabled: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
