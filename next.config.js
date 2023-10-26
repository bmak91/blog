const { withNextPubConfig } = require("@bmak91/nextpub");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextPubConfig(nextConfig, {
  username: "blog",
  domain: "ap.bassem.codes",
});
