const exec = require('child_process').exec

module.exports = cmd =>
  new Promise((resolve, reject) =>
    exec(cmd, (err, stdout, stderr) => {
      if (err) { return reject(err) }
      if (stdout) { console.log(stdout) }
      if (stderr) { console.log(stderr) }
      return resolve()
    })
  )