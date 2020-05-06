const martinez = require('martinez-polygon-clipping')
const features = require('../temp/2000BC.json').features

const loop = (i, features, result, callback) => {
  if (!result) {
    return loop(i + 1, features, features[i].geometry.coordinates, callback)
  }
  if (i === features.length) {
    return callback(result)
  }
  return loop(
    i + 1,
    features,
    martinez.union(result, features[i].geometry.coordinates),
    callback
  )
}

loop(0, features, null, result =>
  console.log(
    JSON.stringify(
      { type: 'Feature', geometry: { type: 'MultiPolygon', coordinates: result } }
    )
  )
)
