const axios = require('axios')
const fs = require('fs')
const path = require('path')

// To run:
// Add: `"pregenerate": "npm run generate-routes"` to `scripts` in `package.json`

async function fetchScoreboardData() {
  const { data } = await axios.get('https://data.battleforthenet.com/scoreboard/all.json')
  return data
}

async function main() {
  const routes = []
  const data = await fetchScoreboardData()

  for (let pol of data) {
    routes.push(`/scoreboard/${pol.bioguide_id}`)
  }

  fs.writeFileSync(path.resolve(__dirname, '..', 'assets', 'data', 'routes.json'), JSON.stringify(routes, null, 2))
}

main().catch(console.error)
