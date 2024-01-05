const path = require("path")

const withNextIntl = require("next-intl/plugin")()

module.exports = withNextIntl({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      @import "./src/styles/_vars.scss";
      @import "./src/styles/_mixins.scss";
    `,
  },
})
