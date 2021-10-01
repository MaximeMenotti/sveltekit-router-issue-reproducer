const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    autoprefixer({
      grid: false, // Disable IE CSS Grid fallbacks
    }),
    isProd &&
    purgecss({
      keyframes: true,
      content: ["./src/**/*.svelte", "./src/**/*.html"],
      whitelistPatterns: [/svelte-/, /tailwindcss\/\/base/,],
      defaultExtractor: (content) =>
        content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
