const readline = require('readline')
const run = require('./run')

const reader = readline.createInterface({
  input: process.stdin,
})

let files = []
const parseLine = line => line.split('.zip')[0].split('data/')[1]

reader.on('line', line => {
  if (line.startsWith('<a href="data')) {
    files.push(parseLine(line))
  }
})

const url = `http://web.archive.org/web/20080328104539/http://library.thinkquest.org:80/C006628/data/`

reader.on('close', () => {
  const cmds = files.map(file => `curl -LO ${url}${file}.zip`)
  Promise.all(cmds.map(run))
    .then(() => console.log('Downloaded zip files'))
    .catch(console.log)
})