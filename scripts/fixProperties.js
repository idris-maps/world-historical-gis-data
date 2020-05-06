const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
})

const fixProps = (d = {}) => Object.keys(d)
  .filter(d => d !== 'AREA')
  .reduce((r, key) => d[key].trim() === '' ? r : { ...r, [key.toLowerCase()]: d[key] }, {})

const fix = f => ({
  ...f,
  properties: fixProps(f.properties),
})

reader.on('line', line => console.log(JSON.stringify(fix(JSON.parse(line)))))