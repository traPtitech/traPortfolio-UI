const fetch = require('node-fetch')
const fs = require('fs').promises
const path = require('path')

const URL = 'https://raw.githubusercontent.com/traPtitech/traPortfolio/master/docs/swagger/traPortfolio.v1.yaml'
const dist = './traPortfolio.v1.yaml'

;(async () => {
  const res = await fetch(URL)
  const body = await res.text()
  await fs.writeFile(path.resolve(__dirname, dist), body)
})()
