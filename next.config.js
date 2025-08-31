/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: true,
  images: {
    domains: ["static.vecteezy.com", "libraries.excalidraw.com", "excalidraw.nyc3.cdn.digitaloceanspaces.com", "community.atlassian.com", "d1csarkz8obe9u.cloudfront.net", "i.sstatic.net"]// add the hostname here
  },
};

export default config;
