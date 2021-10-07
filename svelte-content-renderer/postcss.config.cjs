const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const PurgeSvelte = require("purgecss-from-svelte");

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
      variables: true,
      defaultExtractor: (content) => {
        return PurgeSvelte.extract(content) || []
      }
    }),
  ],
};
