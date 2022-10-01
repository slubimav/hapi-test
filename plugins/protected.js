const pkg = require('../package.json')
require('dotenv').config()

module.exports.name = 'deployPlugin'
module.exports.version = '0.0.1'
module.exports.register = async (server, options) => {
    const routes = options
    let prefixedRoutes = routes.flat()
    if (process.env.NODE_ENV_PROTECTED === 'true') {
      prefixedRoutes = prefixedRoutes.filter(
        (route) => !route.options.tags || !route.options.tags.includes('protected'),
      )
    }
    server.route(prefixedRoutes)
    }