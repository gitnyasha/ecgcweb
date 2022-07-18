const path = require("path");
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
};
module.exports = withImages(withTM());
