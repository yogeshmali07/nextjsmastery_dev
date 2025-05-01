// /** @type {import('postcss').Config} */
// const config = {
//   plugins: {
//     '@tailwindcss/postcss': {},
//     autoprefixer: {},
//   },
// };

// export default config;

// // postcss.config.mjs
export default {
  plugins: {
    // Note: use the official @tailwindcss/postcss plugin
    "@tailwindcss/postcss": {},
    // include autoprefixer if you override default PostCSS config
    autoprefixer: {},
  },
};
