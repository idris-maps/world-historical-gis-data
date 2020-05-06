const fix = require('geojson-precision').parse
const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
})
reader.on('line', line => console.log(JSON.stringify(fix(JSON.parse(line), 4))))