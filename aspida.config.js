// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: './.env.local' })

module.exports = { input: 'src/api', baseURL: `https://${process.env.SERVICE_ID}.microcms.io/api/v1` }
