const fs = require('fs')
const run = require('./run')

const files = fs.readdirSync('temp')
  .filter(d => d.endsWith('.ndjson'))

const command = file => [
  `node scripts/fixCoordinates < temp/${file}`,
  `node scripts/fixProperties`,
  `ndjson-reduce 'p.features.push(d), p' '{type: "FeatureCollection", features: []}' > temp/geojson/${file.split('.ndjson').join('.json')}`
].join(' | ')

const fixOne = file => run(command(file))

const topo = `geo2topo ${  files
  .map(d => d.split('.ndjson').join('.json'))
  .map(d => `temp/geojson/${d}`)
  .join(' ')} > temp/topo.json`

const simplify = `mapshaper temp/topo.json -simplify dp 30% -o format=topojson topo.json`

Promise.all(files.map(fixOne))
  .then(() => run(topo))
  .then(() => run(simplify))
  .catch(console.log)
