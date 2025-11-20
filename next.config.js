/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

const nextConfig = {
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com'],
  },
  async redirects() {
    try {
      const redirectsData = fs.readFileSync(path.join(__dirname, 'data', 'redirects.json'), 'utf8');
      const redirectsJson = JSON.parse(redirectsData);

      return Object.entries(redirectsJson).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      }));
    } catch (error) {
      console.error('Error reading or parsing redirects.json:', error);
      return [];
    }
  },
}

module.exports = nextConfig
