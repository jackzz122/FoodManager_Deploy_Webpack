const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config"),
    require("autoprefixer"),
  ],
};
