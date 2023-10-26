const { withNextPubConfig } = require("nextpub");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextPubConfig(nextConfig, {
  username: "blog",
  domain: "ap.bassem.codes",
});
