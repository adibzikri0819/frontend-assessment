// next.config.ts
import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  basePath: isGithubPages ? '/frontend-assessment' : '',
  assetPrefix: isGithubPages ? '/frontend-assessment/' : '',
  reactStrictMode: true,
};

export default nextConfig;
