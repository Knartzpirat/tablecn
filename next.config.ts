import type { NextConfig } from "next";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// Import environment validation synchronously
import "./src/env.js";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Already doing typechecking as separate task in CI
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
