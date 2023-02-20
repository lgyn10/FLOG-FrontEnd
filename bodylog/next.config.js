/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 새로고침 시  css 날라감 방지
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
