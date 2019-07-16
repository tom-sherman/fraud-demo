const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL,
    KMID: process.env.KMID,
    API_AUTH: process.env.API_AUTH,
  },
})


