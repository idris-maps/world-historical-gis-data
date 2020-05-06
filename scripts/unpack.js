const fs = require('fs')
const run = require('./run')

const files = fs.readdirSync('temp')
  .filter(d => d.endsWith('.zip'))
  .map(zip => ({ zip, name: zip.split('.zip')[0] }))

const fixOne = async ({ zip, name }) => {
  await run(`unzip temp/${zip} -d temp/${name}`)
  const shp = fs.readdirSync(`temp/${name}`).find(d => d.endsWith('.shp'))
  if (!shp) { throw new Error(`Could not find shapefile in temp/${name}`) }
  await run(`mapshaper temp/${name}/${shp} -o format=geojson temp/${name}.json`)
  await run(`ndjson-cat < temp/${name}.json | ndjson-split 'd.features' | ndjson-filter 'd.properties.NAME && d.properties.NAME !== "unclaimed" && d.properties.NAME !== ""' > temp/${name}.ndjson`)
}

Promise.all(files.map(fixOne))
